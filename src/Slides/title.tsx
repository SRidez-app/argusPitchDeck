'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';

interface TitleSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ onNext, onPrevious }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (event.key === 'ArrowLeft' && onPrevious) {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrevious]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
        }}
      />

      {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 400,
        }}
      >
        1
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/whitelogo.png"
            alt="Argus Logo"
            width={400}
            height={400}
            className="w-64 h-auto"
            priority
          />
        </div>

        {/* Title Text */}
        <h1 
          className="text-center"
          style={{
            fontFamily: 'var(--font-abhaya-libre)',
            fontWeight: 800,
            fontSize: '76px',
            lineHeight: '2px',
            letterSpacing: '0.08em',
            textTransform: 'capitalize',
            color: '#FFD700',
            whiteSpace: 'nowrap',
          }}
        >
          Pioneering Traffic Camera AI
        </h1>
      </div>
    </div>
  );
};

export default TitleSlide;