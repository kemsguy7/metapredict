import React from 'react';
import { cn } from '../../lib/utils';

interface GameLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const GameLayout = ({ className, children }: GameLayoutProps) => {
  return (
    <div className={cn("min-h-screen bg-[#212529]", className)}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Left and Right Pool components with shared styles
interface PoolProps {
  type: 'up' | 'down';
  players: number;
  treasury: number;
}

const Pool = ({ type, players, treasury }: PoolProps) => {
  const isUp = type === 'up';
  const borderColor = isUp ? 'border-green-500' : 'border-red-500';
  const textColor = isUp ? 'text-green-500' : 'text-red-500';
  
  return (
    <div className={cn(
      "rounded-2xl border-4 p-4 h-full flex flex-col",
      borderColor
    )}>
      <div className="flex justify-between mb-6">
        <span className={cn("text-2xl font-bold", textColor)}>${treasury}</span>
        <div className="text-right">
          <span className={textColor}>PLAYERS</span>
          <p className={textColor}>{players}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-8">
        {Array(7).fill(0).map((_, i) => (
          <div key={i} className="relative aspect-square">
            <div className={cn(
              "w-full h-full rounded-full border-2",
              isUp ? "border-green-500" : "border-red-500"
            )}>
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-2/5 rounded-b-full",
                isUp ? "bg-green-500" : "bg-red-500"
              )} />
            </div>
            <p className={cn("text-center mt-2", textColor)}>$1</p>
          </div>
        ))}
      </div>

      <button className={cn(
        "mt-auto w-full py-4 rounded-lg",
        isUp ? "bg-green-500" : "bg-red-500"
      )}>
        <div className={cn(
          "w-0 h-0 mx-auto border-x-8 border-x-transparent",
          isUp ? "border-b-[16px] border-b-white" : "border-t-[16px] border-t-white"
        )} />
      </button>
    </div>
  );
};

export { GameLayout, Pool };