import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { cn } from '../../lib/utils';

// Timer Component
const GameTimer = () => {
  const [timeLeft, setTimeLeft] = useState(27);
  const [isOrange, setIsOrange] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 27));
      setIsOrange((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-xl mb-4">TIME LEFT</h2>
      <div className={cn(
        "w-24 h-24 rounded-full border-4 flex items-center justify-center transition-colors duration-500",
        isOrange ? "border-[#F58634] text-[#F58634]" : "border-white text-white"
      )}>
        <span className="text-2xl font-bold">{timeLeft} SEC</span>
      </div>
    </div>
  );
};

// Investment Stats Component
const InvestmentStats = () => {
  return (
    <div className="flex justify-between items-start px-4 mb-8">
      <div>
        <p className="text-white mb-1">YOUR INVESTMENT</p>
        <p className="text-[#F58634] text-2xl font-bold">$1</p>
        <p className="text-green-500">UP WINS 200%</p>
      </div>
      <GameTimer />
      <div className="text-right">
        <p className="text-white mb-1">POTENTIAL RETURN</p>
        <p className="text-[#F58634] text-2xl font-bold">$1</p>
        <p className="text-red-500">DOWN WINS 200%</p>
      </div>
    </div>
  );
};

// Game Stats Component
const GameStats = () => {
  return (
    <div className="bg-black/30 rounded-lg p-4 mb-6">
      <div className="flex justify-between text-white">
        <span>24H PLAYERS: <span className="text-[#F58634]">70</span></span>
        <span>24H WIN RATIO: <span className="text-[#F58634]">60.90%</span></span>
        <span>24H WINS PAID: <span className="text-[#F58634]">$71,903</span></span>
        <span>ALL TIME WINS PAID: <span className="text-[#F58634]">$1,883,383.99</span></span>
      </div>
    </div>
  );
};

// Price Chart Component
const PriceChart = () => {
  const [chartData] = useState(() => {
    // Generate mock data similar to the design
    const data = [];
    let price = 95000;
    for (let i = 0; i < 100; i++) {
      price += (Math.random() - 0.5) * 1000;
      data.push({
        time: i,
        price: price,
        forecast: i < 50 ? price + Math.random() * 2000 : null
      });
    }
    return data;
  });

  return (
    <div className="bg-gradient-to-b from-green-900 via-yellow-900 to-red-900 rounded-lg p-4">
      <div className="flex gap-4 mb-4 text-white text-sm">
        <button className="hover:bg-white/10 px-3 py-1 rounded">BTC 1 SEC</button>
        <button className="hover:bg-white/10 px-3 py-1 rounded">5 SEC</button>
        <button className="hover:bg-white/10 px-3 py-1 rounded">30 SEC</button>
        <button className="hover:bg-white/10 px-3 py-1 rounded">60 SEC</button>
        <button className="hover:bg-white/10 px-3 py-1 rounded">120 SEC</button>
        <div className="ml-auto flex gap-4">
          <button className="hover:bg-white/10 px-3 py-1 rounded">LINE GRAPH</button>
          <button className="hover:bg-white/10 px-3 py-1 rounded">CANDLESTICK CHART</button>
        </div>
      </div>
      <div className="h-64 relative">
        <LineChart width={800} height={250} data={chartData}>
          <XAxis dataKey="time" hide />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#ffffff" 
            dot={false} 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="forecast" 
            stroke="#ffffff" 
            strokeDasharray="5 5" 
            dot={false}
          />
        </LineChart>
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-sm">
          LIVE BITCOIN $93,999.09
        </div>
        <div className="absolute top-20 left-20 bg-white px-3 py-1 rounded text-sm">
          START RATE $93,999.09
        </div>
      </div>
    </div>
  );
};

export { InvestmentStats, GameStats, PriceChart };