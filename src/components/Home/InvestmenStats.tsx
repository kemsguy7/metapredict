import Timer from './Timer';

const InvestmentStats = () => {
    return (
      <div className="flex justify-between items-center md:gap-0">
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
    );
  };

  export default InvestmentStats;