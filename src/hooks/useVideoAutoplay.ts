'use client';

import { useEffect, useRef, RefObject } from 'react';

export function useVideoAutoplay(
  videoRef: RefObject<HTMLVideoElement | null>,
  containerRef: RefObject<HTMLDivElement | null>
): void {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          video.play().catch(() => {
            // Autoplay was prevented, user needs to interact
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(container);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [videoRef, containerRef]);
}
