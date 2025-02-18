
import { Timer, Wallet, MessageCircle } from 'lucide-react';
import Logo from '../../assets/images/meta-predict-logo.png'
const Header = () => {
  return (
    <div className="w-full bg-[#181C20] px-4 lg:px-6 py-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-between items-center">
          {/* Logo */}
          <img src={Logo} alt="META PREDICT" className="h-16" />
          
          {/* Center Controls - Desktop */}
          <div className="flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
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
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
              Chat
            </button>
            <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <img src={Logo} alt="META PREDICT LOGO" className="h-8" />
            
            {/* Middle Controls */}
            <div className="flex-1 mx-4 max-w-xs">
              <div className="flex items-center justify-between px-4 py-2 border-2 border-white rounded-xl">
                <Timer className="w-5 h-5 text-white" />
                <span className="text-white text-sm">$0.00</span>
                <Wallet className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Connect Wallet Button */}
            <button className="px-4 py-2 bg-blue-600 rounded-xl text-white text-sm">
              Connect Wallet
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button className="px-4 py-1.5 border-2 border-white rounded-xl text-white text-sm">
                SMART COPY
              </button>
              <button className="px-4 py-1.5 border-2 border-white rounded-xl text-white text-sm">
                DEVELOPERS
              </button>
            </div>
            <span className="text-white text-sm">TIME LEFT</span>
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;