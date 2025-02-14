import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { cn } from '../../lib/utils';

const PriceChart = ({ isFullView = false }) => {
  const [chartType, setChartType] = useState('line');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Generate mock data
    const data = [];
    let price = 93999.09;
    const timestamp = new Date().getTime();
    
    for (let i = 0; i < 50; i++) {
      const time = timestamp + i * 60000;
      if (chartType === 'candlestick') {
        const open = price;
        const close = price + (Math.random() - 0.5) * 1000;
        const high = Math.max(open, close) + Math.random() * 500;
        const low = Math.min(open, close) - Math.random() * 500;
        data.push({
          x: time,
          y: [open, high, low, close]
        });
        price = close;
      } else {
        data.push({
          x: time,
          y: price
        });
        price += (Math.random() - 0.5) * 1000;
      }
    }
    setChartData(data);
  }, [chartType]);

  const chartOptions: ApexOptions = {
    chart: {
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    theme: {
      mode: 'dark'
    },
    grid: {
      borderColor: '#404043',
      strokeDashArray: 3,
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: chartType === 'line' ? 2 : 1
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#fff'
        }
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff'
        },
        formatter: (value) => `${value.toFixed(2)}`
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B746',
          downward: '#EF403C'
        },
        wick: {
          useFillColor: true
        }
      }
    },
    annotations: {
      points: [
        {
          x: new Date().getTime(),
          y: 93999.09,
          marker: {
            size: 0
          },
          label: {
            text: 'LIVE BITCOIN $93,999.09',
            style: {
              background: '#fff',
              color: '#000',
              padding: {
                left: 10,
                right: 10,
                top: 5,
                bottom: 5
              },
              borderRadius: 5
            },
            offsetY: 0
          }
        }
      ]
    },
    tooltip: {
      theme: 'dark',
      x: {
        format: 'HH:mm:ss'
      }
    }
  };

  const series = chartType === 'line' 
    ? [{
        name: 'Price',
        data: chartData
      }]
    : [{
        name: 'Bitcoin',
        data: chartData
      }];

  return (
    <div className={cn(
      "bg-gradient-to-b from-green-900 via-yellow-900 to-red-900 rounded-lg p-4",
      isFullView ? "w-full lg:w-4/5 mx-auto" : "w-full"
    )}>
      <div className="flex flex-wrap items-center justify-between mb-4 text-white text-xs md:text-sm">
        <div className="flex gap-2 md:gap-4">
          <button className="hover:bg-white/10 px-2 md:px-3 py-1 rounded">BTC 1 SEC</button>
          <button className="hover:bg-white/10 px-2 md:px-3 py-1 rounded">5 SEC</button>
          <button className="hover:bg-white/10 px-2 md:px-3 py-1 rounded">30 SEC</button>
          <button className="hover:bg-white/10 px-2 md:px-3 py-1 rounded">60 SEC</button>
          <button className="hover:bg-white/10 px-2 md:px-3 py-1 rounded">120 SEC</button>
        </div>
        <div className="flex gap-2 md:gap-4">
          <button 
            onClick={() => setChartType('line')}
            className={cn("px-2 md:px-3 py-1 rounded", 
              chartType === 'line' ? "bg-white/20" : "hover:bg-white/10"
            )}
          >
            LINE GRAPH
          </button>
          <button 
            onClick={() => setChartType('candlestick')}
            className={cn("px-2 md:px-3 py-1 rounded",
              chartType === 'candlestick' ? "bg-white/20" : "hover:bg-white/10"
            )}
          >
            CANDLESTICK CHART
          </button>
        </div>
      </div>
      <div className="h-64 md:h-80 w-full">
        <ReactApexChart
          options={chartOptions}
          series={series}
          type={chartType}
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default PriceChart;