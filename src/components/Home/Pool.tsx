import { cn } from '../../lib/utils';

interface PoolProps {
  type: 'up' | 'down';
  players: number;
  treasury: number;
}

const PlayerCircle = ({ type }: { type: 'up' | 'down' }) => {
  const isUp = type === 'up';
  const borderColor = isUp ? 'border-green-500' : 'border-red-500';
  //const strokeColor = isUp ? '#00FF00' : '#FF0000';

  return (
    <div className="relative aspect-square">
      <div className={cn(
        "w-full h-full rounded-full border-2 bg-black overflow-hidden",
        borderColor
      )}>
        {/* Diagonal stripes pattern */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id={`diagonalStripes-${type}`}
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="4"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#diagonalStripes-${type})`} />
        </svg>
        {/* Germany flag circle */}
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full overflow-hidden border-2 border-white">
          <div className="h-1/3 bg-black"></div>
          <div className="h-1/3 bg-red-600"></div>
          <div className="h-1/3 bg-yellow-400"></div>
        </div>
      </div>
      <p className={cn(
        "text-center mt-2 text-sm",
        isUp ? "text-green-500" : "text-red-500"
      )}>
        $1
      </p>
    </div>
  );
};

const Pool = ({ type, players, treasury }: PoolProps) => {
  const isUp = type === 'up';
  const textColor = isUp ? 'text-green-500' : 'text-red-500';

  return (
    <div className={cn(
      "rounded-2xl p-4 h-full md:bg-[#181c20] flex flex-col",
      // Only show border on md and larger screens, and set color based on type
      "border-0 md:border-4",
      isUp ? "md:border-green-500" : "md:border-red-500"
    )}>
      <div className="flex justify-between mb-6">
        <div className={cn("text-2xl font-bold", textColor)}>${treasury}</div>
        <div className="text-right">
          <div className={textColor}>PLAYERS</div>
          <div className={textColor}>{players}</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {Array(7).fill(0).map((_, i) => (
          <PlayerCircle key={i} type={type} />
        ))}
      </div>

      <button className={cn(
        "mt-auto w-full py-4 rounded-lg transition-colors",
        isUp ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
      )}>
        <div className={cn(
          "w-0 h-0 mx-auto border-x-8 border-x-transparent",
          isUp ? "border-b-[16px] border-b-white" : "border-t-[16px] border-t-white"
        )} />
      </button>
    </div>
  );
};

export default Pool;