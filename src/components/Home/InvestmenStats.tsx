import Timer from './Timer';

const InvestmentStats = () => {
    return (
      <div className="flex justify-between items-center mx-4">
        {/* Mobile View (current) */}
        <div className="flex justify-between items-center w-full lg:hidden">
          <div>
            <p className="text-white text-sm md:text-base">YOUR INVESTMENT</p>
            <p className="text-[#F58634] text-xl md:text-2xl font-bold">$1</p>
            <p className="text-green-500 text-sm md:text-base">UP WINS 200%</p>
          </div>
          <Timer />
          <div className="text-right">
            <p className="text-white text-sm md:text-base">POTENTIAL RETURN</p>
            <p className="text-[#F58634] text-xl md:text-2xl font-bold">$1</p>
            <p className="text-red-500 text-sm md:text-base">DOWN WINS 200%</p>
          </div>
        </div>
  
        {/* Desktop View with adjusted font sizes */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-white text-lg mb-2">YOUR INVESTMENT</span>
            <span className="text-[#F58634] text-2xl font-bold">$1</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-2xl mb-2">UP WINS</span>
            <span className="text-green-500 text-3xl">200%</span>
          </div>
  
          <div className="text-center">
            {/* <p className="text-white text-xl mb-4">TIME LEFT</p> */}
            <Timer />
          </div>
  
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-2xl mb-2">DOWN WINS</span>
            <span className="text-red-500 text-3xl">200%</span>
          </div>
  
          <div className="flex flex-col text-right">
            <span className="text-white text-lg mb-2">POTENTIAL RETURN</span>
            <span className="text-[#F58634] text-2xl font-bold">$1</span>
          </div>
        </div>
      </div>
    );
  };

export default InvestmentStats;