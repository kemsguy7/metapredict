import { Timer, Wallet, MessageCircle } from 'lucide-react';
import Logo from '../../assets/images/meta-predict-logo.png'

const Header = () => {
  return (
    <div className="w-full bg-[#181C20] px-4 lg:px-6 py-4">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="META PREDICT" className="h-16 mb-4 lg:mb-0" />
        
        {/* Center Controls - Desktop */}
        <div className="hidden lg:flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
          <button className="px-4 py-1.5 border-2 border-white rounded-lg text-white text-sm hover:bg-white/10">
            SMART COPY
          </button>
          <div className="flex items-center gap-2 px-4 py-1.5 border-2 border-white rounded-lg text-white">
            <Timer className="w-4 h-4" />
            <span className="text-sm">$0.00</span>
            <Wallet className="w-4 h-4" />
          </div>
          <button className="px-4 py-1.5 border-2 border-white rounded-lg text-white text-sm hover:bg-white/10">
            DEVELOPERS
          </button>
        </div>

        {/* Right Controls - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
            Chat
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2 w-full">
          <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-white rounded-lg text-white flex-1">
            <Timer className="w-4 h-4" />
            <span className="text-xs">$0.00</span>
            <Wallet className="w-4 h-4" />
          </div>
          <button className="px-3 py-1.5 bg-blue-600 rounded-lg text-white text-xs whitespace-nowrap">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Sub-Header */}
      <div className="flex lg:hidden justify-between items-center mt-4 px-4">
        <button className="px-3 py-1 border-2 border-white rounded-lg text-white text-xs">
          SMART COPY
        </button>
        <button className="px-3 py-1 border-2 border-white rounded-lg text-white text-xs">
          DEVELOPERS
        </button>
        <span className="text-white text-xs">TIME LEFT</span>
        <MessageCircle className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default Header;