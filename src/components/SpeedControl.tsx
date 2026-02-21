'use client';

interface SpeedControlProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
}

const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

export function SpeedControl({ speed, onSpeedChange }: SpeedControlProps) {
  const cycleSpeed = () => {
    const currentIndex = speeds.indexOf(speed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    onSpeedChange(speeds[nextIndex]);
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        cycleSpeed();
      }}
      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold"
    >
      {speed}x
    </button>
  );
}
