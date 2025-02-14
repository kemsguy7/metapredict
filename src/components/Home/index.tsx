// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
// import Header from '../Header';

// // Mock data for the chart
// const generateMockData = () => {
//   const data = [];
//   let price = 95000;
//   for (let i = 0; i < 100; i++) {
//     price += (Math.random() - 0.5) * 1000;
//     data.push({
//       time: i,
//       price: price,
//       forecast: i < 50 ? price + Math.random() * 2000 : null
//     });
//   }
//   return data;
// };

// // Types
// interface Player {
//   amount: number;
//   isActive: boolean;
// }

// const MetapredictGame = () => {
//   const [timeLeft, setTimeLeft] = useState(27);
//   const [chartData] = useState(generateMockData());
//   const [selectedAmount, setSelectedAmount] = useState(1);
  
//   const amounts = [1, 2, 5, 10, 15, 20, 25];
//   const upPlayers: Player[] = Array(7).fill({ amount: 1, isActive: true });
//   const downPlayers: Player[] = Array(7).fill({ amount: 1, isActive: true });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 27));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-4">

//         <Header />

//       {/* Game Stats */}
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         <div className="flex flex-col">
//           <div>YOUR INVESTMENT</div>
//           <div className="text-orange-500 text-2xl">$1</div>
//           <div className="text-green-500">UP WINS 200%</div>
//         </div>
//         <div className="flex flex-col items-center">
//           <div>TIME LEFT</div>
//           <div className="text-2xl font-bold w-20 h-20 rounded-full border-4 border-orange-500 flex items-center justify-center">
//             {timeLeft} SEC
//           </div>
//         </div>
//         <div className="flex flex-col items-end">
//           <div>POTENTIAL RETURN</div>
//           <div className="text-orange-500 text-2xl">$1</div>
//           <div className="text-red-500">DOWN WINS 200%</div>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="bg-gradient-to-b from-green-900 to-orange-900 rounded-lg p-4 mb-6">
//         <div className="flex gap-4 mb-4">
//           <button className="px-4 py-1 bg-transparent text-white">1 SEC</button>
//           <button className="px-4 py-1 bg-transparent text-white">30 SEC</button>
//           <button className="px-4 py-1 bg-transparent text-white">60 SEC</button>
//           <button className="px-4 py-1 bg-transparent text-white">120 SEC</button>
//         </div>
//         <div className="h-64">
//           <LineChart width={800} height={250} data={chartData}>
//             <XAxis dataKey="time" hide />
//             <YAxis domain={['auto', 'auto']} />
//             <Tooltip />
//             <Line 
//               type="monotone" 
//               dataKey="price" 
//               stroke="#ffffff" 
//               dot={false} 
//               strokeWidth={2}
//             />
//             <Line 
//               type="monotone" 
//               dataKey="forecast" 
//               stroke="#ffffff" 
//               strokeDasharray="5 5" 
//               dot={false}
//             />
//             <ReferenceLine y={chartData[0]?.price} stroke="#888" strokeDasharray="3 3" />
//           </LineChart>
//         </div>
//       </div>

//       {/* Players Grid */}
//       <div className="grid grid-cols-2 gap-8 mb-6">
//         <div className="border border-green-500 rounded-lg p-4">
//           <div className="grid grid-cols-4 gap-4">
//             {upPlayers.map((player, i) => (
//               <div key={i} className="relative">
//                 <div className="w-full pt-[100%] rounded-full bg-black border-2 border-green-500">
//                   <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-green-500 rounded-b-full" />
//                 </div>
//                 <div className="text-center mt-2 text-green-500">$1</div>
//               </div>
//             ))}
//           </div>
//           <button className="w-full mt-4 p-4 bg-green-500 rounded-lg">
//             <div className="triangle-up mx-auto" />
//           </button>
//         </div>
//         <div className="border border-red-500 rounded-lg p-4">
//           <div className="grid grid-cols-4 gap-4">
//             {downPlayers.map((player, i) => (
//               <div key={i} className="relative">
//                 <div className="w-full pt-[100%] rounded-full bg-black border-2 border-red-500">
//                   <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-red-500 rounded-b-full" />
//                 </div>
//                 <div className="text-center mt-2 text-red-500">$1</div>
//               </div>
//             ))}
//           </div>
//           <button className="w-full mt-4 p-4 bg-red-500 rounded-lg">
//             <div className="triangle-down mx-auto" />
//           </button>
//         </div>
//       </div>

//       {/* Amount Selection */}
//       <div className="flex gap-4 justify-center">
//         {amounts.map((amount) => (
//           <button
//             key={amount}
//             onClick={() => setSelectedAmount(amount)}
//             className={`px-6 py-2 rounded-lg ${
//               selectedAmount === amount
//                 ? 'bg-green-500'
//                 : 'border border-gray-600'
//             }`}
//           >
//             ${amount}
//           </button>
//         ))}
//       </div>

//       <style>{`
//         .triangle-up {
//           width: 0;
//           height: 0;
//           border-left: 10px solid transparent;
//           border-right: 10px solid transparent;
//           border-bottom: 20px solid white;
//         }
//         .triangle-down {
//           width: 0;
//           height: 0;
//           border-left: 10px solid transparent;
//           border-right: 10px solid transparent;
//           border-top: 20px solid white;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MetapredictGame;



import { useState } from 'react';
import Header from '../Header';
import { GameLayout, Pool } from './GameLayout';
import { InvestmentStats, GameStats, PriceChart } from './Middlesection';
import { cn } from '../../lib/utils';

const AmountSelector = () => {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const amounts = [1, 2, 5, 10, 15, 20, 25];

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-6">
      {amounts.map((amount) => (
        <button
          key={amount}
          onClick={() => setSelectedAmount(amount)}
          className={cn(
            "px-6 py-2 rounded-lg transition-colors",
            selectedAmount === amount
              ? "bg-green-500 text-white"
              : "border-2 border-white/20 text-white hover:border-white"
          )}
        >
          ${amount}
        </button>
      ))}
    </div>
  );
};

const MetapredictGame = () => {
  return (
    <div className="min-h-screen bg-[#181C20]">
      <Header />
      <main className="bg-[#212529] min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 py-6">
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr] gap-6">
            <Pool type="up" players={7} treasury={0} />
            <div className="space-y-6">
              <InvestmentStats />
              <GameStats />
              <PriceChart />
              <AmountSelector />
            </div>
            <Pool type="down" players={7} treasury={0} />
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            <InvestmentStats />
            <PriceChart />
            <GameStats />
            <div className="grid grid-cols-2 gap-4">
              <Pool type="up" players={7} treasury={0} />
              <Pool type="down" players={7} treasury={0} />
            </div>
            <AmountSelector />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MetapredictGame;