'use client';

import { useRef, useEffect } from 'react';
import { categories } from '@/data/videos';

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({ selectedCategory, onSelectCategory }: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  // Scroll selected tab into view
  useEffect(() => {
    if (selectedRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const button = selectedRef.current;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const scrollLeft = button.offsetLeft - containerRect.width / 2 + buttonRect.width / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  return (
    <div className="absolute top-0 left-0 right-0 z-20 safe-top bg-gradient-to-b from-bg-primary/95 to-transparent pb-8">
      <div className="pt-3">
        <div ref={scrollRef} className="category-tabs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={isSelected ? selectedRef : null}
                onClick={() => onSelectCategory(cat.id)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200 whitespace-nowrap
                  ${isSelected
                    ? 'text-bg-primary shadow-lg'
                    : 'text-text-secondary bg-bg-secondary/80 backdrop-blur-sm'
                  }
                `}
                style={isSelected ? {
                  backgroundColor: cat.color,
                  boxShadow: `0 0 20px ${cat.color}40`
                } : {}}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
