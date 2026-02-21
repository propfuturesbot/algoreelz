'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { videos, Video } from '@/data/videos';
import { VideoReel } from './VideoReel';
import { CategoryTabs } from './CategoryTabs';

export function ReelsContainer() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [globalMuted, setGlobalMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter videos by category
  const filteredVideos: Video[] = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  // Handle category change - scroll to top
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Track current video index via scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const index = Math.round(scrollTop / viewportHeight);
      setCurrentIndex(Math.min(index, filteredVideos.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [filteredVideos.length]);

  // Keyboard navigation for desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const viewportHeight = container.clientHeight;

      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, filteredVideos.length - 1);
        container.scrollTo({ top: nextIndex * viewportHeight, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        container.scrollTo({ top: prevIndex * viewportHeight, behavior: 'smooth' });
      } else if (e.key === 'm') {
        e.preventDefault();
        setGlobalMuted(prev => !prev);
      } else if (e.key === 's') {
        // Cycle speed with 's' key
        e.preventDefault();
        const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
        const currentIdx = speeds.indexOf(speed);
        const nextIdx = (currentIdx + 1) % speeds.length;
        setSpeed(speeds[nextIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, filteredVideos.length, speed]);

  const handleMuteToggle = useCallback(() => {
    setGlobalMuted(prev => !prev);
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
  }, []);

  return (
    <div className="relative w-full h-screen-dynamic overflow-hidden bg-bg-primary">
      {/* Category tabs */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/* Reels container */}
      <div ref={containerRef} className="reels-container">
        {filteredVideos.map((video, index) => (
          <VideoReel
            key={video.id}
            video={video}
            currentIndex={index}
            totalVideos={filteredVideos.length}
            globalMuted={globalMuted}
            onMuteToggle={handleMuteToggle}
            isActive={index === currentIndex}
            speed={speed}
            onSpeedChange={handleSpeedChange}
          />
        ))}

        {/* Empty state */}
        {filteredVideos.length === 0 && (
          <div className="reel flex flex-col items-center justify-center text-text-secondary">
            <svg className="w-16 h-16 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
            </svg>
            <p className="text-lg font-medium">No videos in this category</p>
          </div>
        )}
      </div>

      {/* Swipe hint (shown briefly on first load) */}
      <SwipeHint />
    </div>
  );
}

function SwipeHint() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 fade-in pointer-events-none">
      <div className="flex flex-col items-center text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
        <span className="text-sm">Swipe up</span>
      </div>
    </div>
  );
}
