import { Timer, Wallet, MessageCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn("w-full bg-[#181C20] px-6 py-4", className)}>
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center">
        <img src="/api/placeholder/120/40" alt="META PREDICT" className="h-8" />
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border-2 border-white rounded-lg text-white hover:bg-white/10 transition-colors">
            SMART COPY
          </button>
          <div className="flex items-center gap-3 px-4 py-2 border-2 border-white rounded-lg text-white">
            <Timer className="w-5 h-5" />
            <span className="mx-2">$0.00</span>
            <Wallet className="w-5 h-5" />
          </div>
          <button className="px-6 py-2 border-2 border-white rounded-lg text-white hover:bg-white/10 transition-colors">
            DEVELOPERS
          </button>
          <button className="px-4 py-2 text-white hover:bg-blue-600/90 transition-colors rounded-lg bg-blue-600">
            Chat
          </button>
          <button className="px-6 py-2 text-white hover:bg-blue-600/90 transition-colors rounded-lg bg-blue-600">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden justify-between items-center">
        <img src="/api/placeholder/120/40" alt="META PREDICT" className="h-6" />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 border-2 border-white rounded-lg text-white">
            <Timer className="w-4 h-4" />
            <span className="text-sm">$0.00</span>
            <Wallet className="w-4 h-4" />
          </div>
          <button className="px-4 py-2 text-white hover:bg-blue-600/90 transition-colors rounded-lg bg-blue-600 text-sm">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Sub-Header */}
      <div className="flex lg:hidden justify-between items-center mt-4">
        <button className="px-4 py-1.5 border-2 border-white rounded-lg text-white text-sm">
          SMART COPY
        </button>
        <button className="px-4 py-1.5 border-2 border-white rounded-lg text-white text-sm">
          DEVELOPERS
        </button>
        <span className="text-white text-sm">TIME LEFT</span>
        <MessageCircle className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export default Header;



