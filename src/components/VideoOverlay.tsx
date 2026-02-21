'use client';

import { MuteButton } from './MuteButton';
import { SpeedControl } from './SpeedControl';

interface VideoOverlayProps {
  title: string;
  categoryLabel: string;
  categoryColor: string;
  isMuted: boolean;
  showMuteHint: boolean;
  progress: number;
  currentIndex: number;
  totalVideos: number;
  speed: number;
  onSpeedChange: (speed: number) => void;
}

export function VideoOverlay({
  title,
  categoryLabel,
  categoryColor,
  isMuted,
  showMuteHint,
  progress,
  currentIndex,
  totalVideos,
  speed,
  onSpeedChange,
}: VideoOverlayProps) {
  return (
    <>
      {/* Top overlay - mute button and speed */}
      <div className="absolute top-0 left-0 right-0 safe-top px-4 pt-3 z-10 pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto flex items-center gap-3">
            <MuteButton isMuted={isMuted} showHint={showMuteHint} />
            <SpeedControl speed={speed} onSpeedChange={onSpeedChange} />
          </div>
          <div className="text-white/70 text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {totalVideos}
          </div>
        </div>
      </div>

      {/* Bottom overlay - title and category */}
      <div className="absolute bottom-0 left-0 right-0 safe-bottom z-10 pointer-events-none">
        <div className="px-4 pb-4">
          {/* Category badge */}
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryColor,
              border: `1px solid ${categoryColor}40`
            }}
          >
            {categoryLabel}
          </div>

          {/* Title */}
          <h2 className="text-white text-xl font-bold drop-shadow-lg">
            {title}
          </h2>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Gradient overlays for better text visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </>
  );
}
