import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface CrashDetectionSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const CrashDetectionSlide: React.FC<CrashDetectionSlideProps> = ({ onNext, onPrevious }) => {
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
    <div 
      className="relative w-full min-h-screen overflow-auto"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white z-10"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        3
      </div>

      {/* Content Container */}
      <div className="relative min-h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
        {/* Title Section */}
        <div className="mb-8">
          <h2 
            className="text-white mb-3"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '0.02em',
              borderBottom: '3px solid #FFCA2B',
              paddingBottom: '6px',
              display: 'inline-block',
              color: '#FFCA2B',
              maxWidth: '761px',
            }}
          >
            ARGUS<sup></sup> CRASH & INCIDENT DETECTION
          </h2>
        </div>

        {/* Description Box with Gradient */}
        <div 
          className="mb-8 flex items-center"
          style={{
            width: '100%',
            maxWidth: '1512px',
            minHeight: '92px',
            gap: '14px',
            padding: '24px 32px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 202, 43, 0.3)',
            background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
          }}
        >
          {/* Icon */}
          <ChevronRight 
            size={32} 
            style={{ 
              color: '#FFCA2B',
              flexShrink: 0,
            }} 
          />
          
          {/* Description Text */}
          <p 
            className="text-white"
            style={{
              fontFamily: 'Apercu Pro',
              fontWeight: 400,
              fontSize: '28px',
              lineHeight: '130%',
              letterSpacing: '0.02em',
              flex: 1,
            }}
          >
            We collect vast data to train our AI to predict normal road conditions and detect anomalies. AI detects, confirms, sends, send alerts and severity forecasts.
          </p>
        </div>

        {/* Video Container */}
        <div 
          className="w-full"
          style={{
            maxWidth: '1646px',
          }}
        >
          <video
            autoPlay
            muted
            loop
            controls
            className="w-full rounded-lg"
            style={{
              maxHeight: '600px',
            }}
          >
            <source src="/videos/accidentdetection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default CrashDetectionSlide;