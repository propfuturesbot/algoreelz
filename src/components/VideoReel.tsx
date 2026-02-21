'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Video } from '@/data/videos';
import { useVideoAutoplay } from '@/hooks/useVideoAutoplay';
import { VideoOverlay } from './VideoOverlay';

interface VideoReelProps {
  video: Video;
  currentIndex: number;
  totalVideos: number;
  globalMuted: boolean;
  onMuteToggle: () => void;
  isActive: boolean;
  speed: number;
  onSpeedChange: (speed: number) => void;
}

export function VideoReel({
  video,
  currentIndex,
  totalVideos,
  globalMuted,
  onMuteToggle,
  isActive,
  speed,
  onSpeedChange,
}: VideoReelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showMuteHint, setShowMuteHint] = useState(true);

  useVideoAutoplay(videoRef, containerRef);

  // Update muted state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = globalMuted;
    }
  }, [globalMuted]);

  // Update playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  // Hide mute hint after first unmute
  useEffect(() => {
    if (!globalMuted) {
      setShowMuteHint(false);
    }
  }, [globalMuted]);

  // Track progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handleVideoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onMuteToggle();
  }, [onMuteToggle]);

  const handleLoadedData = () => {
    setIsLoading(false);
    // Apply speed when video loads
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div ref={containerRef} className="reel" onClick={handleVideoClick}>
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 skeleton flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-secondary text-text-secondary">
          <svg className="w-16 h-16 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <p className="text-lg font-medium">Video unavailable</p>
          <p className="text-sm mt-1">{video.title}</p>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        muted={globalMuted}
        playsInline
        loop
        preload={isActive ? "auto" : "metadata"}
        onLoadedData={handleLoadedData}
        onError={handleError}
        className={`w-full h-full object-contain ${isLoading || hasError ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Overlay */}
      {!hasError && (
        <VideoOverlay
          title={video.title}
          categoryLabel={video.categoryLabel}
          categoryColor={video.categoryColor}
          isMuted={globalMuted}
          showMuteHint={showMuteHint && isActive}
          progress={progress}
          currentIndex={currentIndex}
          totalVideos={totalVideos}
          speed={speed}
          onSpeedChange={onSpeedChange}
        />
      )}
    </div>
  );
}
