import { useState, useEffect, useRef} from "react";
import ReactApexChart from "react-apexcharts";
import { Maximize2, Minimize2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { ApexOptions } from "apexcharts";
import { useNavigate, useLocation } from "react-router-dom";

// const API_KEY = import.meta.env.VITE_BINANCE_API_KEY;
const WS_BASE_URL = "wss://stream.binance.com:443/ws/kline_";
const BASE_URL = "https://api.binance.com/api/v3";

interface PriceChartProps {
	isFullView?: boolean;
}

type ChartDataPoint = {
	x: number;
	y: number | number[];
};

const PriceChart = ({ isFullView = false }: PriceChartProps) => {
	const [chartType, setChartType] = useState<"line" | "candlestick">(() => {
		const savedChartType = localStorage.getItem("preferredChartType");
		return (savedChartType as "line" | "candlestick") || "candlestick";
	});
	const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
	const [timeframe, setTimeframe] = useState<string>("1s");
	const [lastPrice, setLastPrice] = useState<number>(0);
	const wsRef = useRef<WebSocket | null>(null);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		localStorage.setItem("preferredChartType", chartType);
	}, [chartType]);



	const handleToggleFullscreen = () => {
		if (location.pathname === "/full-view") {
			navigate("/");
		} else {
			navigate("/full-view");
		}
	};

	const timeframeMap: any = {
		"1s": "1m",
		"5s": "5m",
		"30s": "30m",
		"60s": "1h",
		"120s": "2h",
	};

	useEffect(() => {
		let isSubscribed = true;

		const fetchInitialData = async () => {
			const interval = timeframeMap[timeframe] || "1m";
			try {
				const response = await fetch(
					`${BASE_URL}/klines?symbol=BTCUSDT&interval=${interval}&limit=100`,
				);
				const data = await response.json();

				if (isSubscribed) {
					const formattedData = data.map((d: any) => ({
						x: d[0],
						y:
							chartType === "candlestick"
								? [
										parseFloat(d[1]),
										parseFloat(d[2]),
										parseFloat(d[3]),
										parseFloat(d[4]),
								  ]
								: parseFloat(d[4]),
					}));
					setChartData(formattedData);
				}
			} catch (error) {
				console.error("Error fetching initial data:", error);
			}
		};

		const connectWebSocket = () => {
			if (wsRef.current) {
				wsRef.current.close();
			}

			if (wsRef.current?.readyState === WebSocket.OPEN) {
				wsRef.current.close();
			}

			wsRef.current = new WebSocket(WS_BASE_URL);

			wsRef.current.onopen = () => {
				console.log("WebSocket Connected");
				const interval = timeframeMap[timeframe] || "1m";
				// Subscribe to BTC/USDT trades
				const subscribeMsg = {
					method: "SUBSCRIBE",
					params: [`btcusdt@kline_${interval}`],
					id: Date.now(),
				};
				wsRef.current?.send(JSON.stringify(subscribeMsg));
			};

			wsRef.current.onmessage = (event) => {
				try {
					const data = JSON.parse(event.data);
					const candlestick: any = data.k;

					const timestamp = candlestick?.t;
					const price = parseFloat(candlestick?.c);
					const open = parseFloat(candlestick?.o);
					const high = parseFloat(candlestick.h);
					const low = parseFloat(candlestick.l);
					const close = parseFloat(candlestick.c);

					setLastPrice(price);
					setChartData((prev) => {
						const newPoint = {
							x: chartType === "candlestick" ? timestamp : Date.now(),
							y: chartType === "line" ? close : [open, high, low, close],
						};

						const lastCandle: any = prev[prev.length - 1];

						if (chartType === "candlestick") {
							if (lastCandle && lastCandle.x === timestamp) {
								// If the same timeframe, update the last candle
								const updatedCandle = {
									x: timestamp,
									y: [
										lastCandle.y[0], // Open remains the same
										Math.max(lastCandle.y[1], high), // Update high
										Math.min(lastCandle.y[2], low), // Update low
										close, // Update close
									],
								};
								return [...prev.slice(0, -1), updatedCandle]; // Replace last candle
							} else {
								// If new timeframe, add a new candle
								return [...prev, newPoint].slice(-100); // Keep last 100 points
							}
						}
						return [...prev, newPoint].slice(-100);
					});
				} catch (error) {
					console.error("Error processing message:", error);
				}
			};

			wsRef.current.onerror = (error) => {
				console.error("WebSocket error:", error);
			};

			wsRef.current.onclose = () => {
				if (isSubscribed) {
					setTimeout(connectWebSocket, 5000);
				}
			};
		};

		fetchInitialData();
		connectWebSocket();

		return () => {
			isSubscribed = false;
			if (wsRef.current) {
				wsRef.current.close();
			}
		};
	}, [chartType, timeframe]);

	const chartOptions: ApexOptions = {
		chart: {
			type: chartType,
			animations: {
				enabled: true, // Enable animations for smooth updates
			},
			toolbar: {
				show: false,
			},
			background: chartType === "candlestick" ? "#181C20" : "transparent",
		},
		theme: {
			mode: "dark",
		},
		grid: {
			borderColor: "#404043",
			strokeDashArray: 3,
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		stroke: {
			curve: "smooth" as const,
			width: chartType === "line" ? 2 : 1,
		},
		xaxis: {
			type: "datetime",
			labels: {
				style: {
					colors: "#fff",
				},
			},
			axisBorder: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: "#fff",
				},
				formatter: (value: number) => `$${value.toFixed(2)}`,
			},
		},
		tooltip: {
			enabled: true,
			custom: ({ dataPointIndex, w }: any) => {
				const data = w.globals.initialSeries[0].data[dataPointIndex];
				const timestamp = new Date(data.x).toLocaleString();

				if (chartType === "candlestick") {
					const [open, high, low, close] = data.y;
					return `
                    <div class="p-2 bg-gray-800 text-white rounded">
                        <div>${timestamp}</div>
                        <div>Open: $${open.toFixed(2)}</div>
                        <div>High: $${high.toFixed(2)}</div>
                        <div>Low: $${low.toFixed(2)}</div>
                        <div>Close: $${close.toFixed(2)}</div>
                    </div>
                `;
				} else {
					return `
                    <div class="p-2 bg-gray-800 text-white rounded">
                        <div>${timestamp}</div>
                        <div>Price: $${data.y.toFixed(2)}</div>
                    </div>
                `;
				}
			},
		},

		plotOptions: {
			candlestick: {
				colors: {
					upward: "#00B746",
					downward: "#EF403C",
				},
				wick: {
					useFillColor: true,
				},
			},
		},
	};

	const containerClasses = cn(
		"relative rounded-lg p-4 transition-all duration-300",
		chartType === "line"
			? "bg-gradient-to-b from-green-900 via-yellow-900 to-red-900"
			: "bg-[#181C20]",
		isFullView ? "w-full mx-auto" : "w-full",
	);

	return (
		<div className={containerClasses}>
			<div className="flex flex-wrap items-center justify-between mb-4 text-white text-xs md:text-sm">
				<div className="flex gap-2 md:gap-4">
					{Object.keys(timeframeMap).map((tf) => (
						<button
							key={tf}
							onClick={() => setTimeframe(tf)}
							className={cn(
								"hover:bg-white/10 px-2 md:px-3 py-1 rounded",
								timeframe === tf ? "bg-white/20" : "",
							)}
						>
							BTC {tf.toUpperCase()}
						</button>
					))}
				</div>
				<div className="flex gap-2 md:gap-4 items-center">
					<button
						onClick={() => setChartType("line")}
						className={cn(
							"px-2 md:px-3 py-1 rounded",
							chartType === "line" ? "bg-white/20" : "hover:bg-white/10",
						)}
					>
						LINE GRAPH
					</button>
					<button
						onClick={() => setChartType("candlestick")}
						className={cn(
							"px-2 md:px-3 py-1 rounded",
							chartType === "candlestick" ? "bg-white/20" : "hover:bg-white/10",
						)}
					>
						CANDLESTICK CHART
					</button>
				</div>
			</div>

			<button
				onClick={handleToggleFullscreen}
				className="absolute top-4 right-4 text-white hover:bg-white/10 p-1 rounded-lg z-10"
			>
				{isFullView ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
			</button>

			<div className="h-64 md:h-80 w-full">
				<ReactApexChart
					options={chartOptions}
					series={[{ data: chartData }]}
					type={chartType}
					height="100%"
					width="100%"
				/>
			</div>
			<div className="mt-2 text-white text-sm font-bold">
				Current Price: ${lastPrice.toFixed(2)}
			</div>
		</div>
	);
};

export default PriceChart;
