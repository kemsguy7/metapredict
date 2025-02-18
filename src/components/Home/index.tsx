import { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import HeaderRow from '../Header/headerRow';
import Pool from './Pool';
import InvestmentStats from './InvestmenStats';
import PriceChart from './PriceChart';
import { cn } from '../../lib/utils';
import FullView from './FullView';

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
            "px-4 py-2 rounded-lg transition-colors text-sm md:text-base",
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

const GameStats = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:block">
       
        <div className="md:bg-[#181c20] rounded-2xl p-4">
        <h2 className="text-white text-2xl font-bold text-center mb-4">STATS</h2>
          <div className="flex justify-between items-center text-white text-base whitespace-nowrap">
            <div>24H PLAYERS; <span className="text-[#F58634]">70</span></div>
            <div>24H WIN RATIO; <span className="text-[#F58634]">60.90%</span></div>
            <div>24H WINS PAID; <span className="text-[#F58634]">$71,903</span></div>
            <div>ALL TIME WINS PAID; <span className="text-[#F58634]">$1,883,383.99</span></div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden rounded-lg p-4">
        <div className="flex justify-between text-white text-sm">
          <div>24H PLAYERS; <span className="text-[#F58634]">70</span></div>
          <div>24H WINS PAID; <span className="text-[#F58634]">$71,903</span></div>
          <div>24H WIN RATIO; <span className="text-[#F58634]">60.90%</span></div>
        </div>
      </div>
    </div>
  );
};


const MetapredictGame = () => {
  const location = useLocation();
  const isFullView = location.pathname === '/full-view';

  return (
    <div className="min-h-screen bg-[#181C20]">
      <Header />
      <HeaderRow />

      <main className="bg-[#212529] min-h-[calc(100vh-80px)] ">
        <div className=" md:mx-4 px-4 py-6">
         
          {isFullView ?(
            <FullView />
          ) : (

            <>
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr] gap-11">
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
            </>
  )}
        </div>
      </main>
    </div>
  );
};
export default MetapredictGame;
