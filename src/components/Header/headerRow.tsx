import { MessageCircle } from 'lucide-react';

const HeaderRow = () => {
    return (
        <div>
              {/* Bottom Row */}
      <div className="flex items-center bg-[#212529] justify-between lg:hidden ">
            <div className="flex gap-4">
              <button className="px-4 py-1.5 border-2 border-white rounded-xl text-white text-sm">
                SMART COPY
              </button>
              <button className="px-4 py-1.5 border-2 border-white rounded-xl text-white text-sm">
                DEVELOPERS
              </button>
            </div>
            <span className="text-white pr-2.5 text-sm">TIME LEFT</span>
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </div>
    );
}

export default HeaderRow;
