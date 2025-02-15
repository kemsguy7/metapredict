import  Timer  from './Timer';
import PriceChart from './PriceChart';

const FullView = () => {
  return (
    <div className="min-h-screen bg-[rgb(24,28,32)]">
    
      <main className="bg-[#212529] min-h-[calc(100vh-80px)] px-4 py-6">
        <div className="w-full  mx-auto">
          {/* Investment Stats */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <p className="text-white mb-1">YOUR INVESTMENT</p>
              <p className="text-[#F58634] text-2xl font-bold">$1</p>
              <p className="text-green-500">UP WINS 200%</p>
            </div>
            <Timer />
            <div className="text-right">
              <p className="text-white mb-1">POTENTIAL RETURN</p>
              <p className="text-[#F58634] text-2xl font-bold">$1</p>
              <p className="text-red-500">DOWN WINS 200%</p>
            </div>
          </div>

          {/* Chart */}
          <PriceChart isFullView={true}  />

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="w-40 h-12 bg-green-500 rounded-lg">
              <div className="w-0 h-0 mx-auto border-x-8 border-x-transparent border-b-[16px] border-b-white" />
            </button>
            <button className="w-40 h-12 bg-red-500 rounded-lg">
              <div className="w-0 h-0 mx-auto border-x-8 border-x-transparent border-t-[16px] border-t-white" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FullView;
