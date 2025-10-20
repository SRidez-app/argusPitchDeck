import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadthOfImpactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const BreadthOfImpactSlide: React.FC<BreadthOfImpactSlideProps> = ({ onNext, onPrevious }) => {
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

  const impacts = [
    '35% of Accidents are disputed fault and fraudulent',
    '911/Emergency Response is delayed and lives are impacted',
    'DOT Dept. - Struggle to manage congestion in response to incidents',
    'Accident Alerts are delayed resulting in wasted time/fuel and lost revenue.',
  ];

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
        4
      </div>

      {/* Content Container */}
      <div className="relative min-h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
        {/* Title Section */}
        <div 
          className="mb-16"
          style={{
            maxWidth: '1706px',
            gap: '16px',
          }}
        >
          <h2 
            className="text-white mb-8"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '0.02em',
              borderBottom: '3px solid #FFCA2B',
              paddingBottom: '6px',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            THE PROBLEM
          </h2>

          <h1 
            className="text-[#FFCA2B] mt-8 mb-12"
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '96px',
              lineHeight: '100%',
              letterSpacing: '0px',
              maxWidth: '1680px',
            }}
          >
            Impacts to our cities are widespread
          </h1>
        </div>

        {/* Impact Items Container */}
        <div 
          className="flex flex-col w-full"
          style={{
            maxWidth: '1706px',
            gap: '24px',
          }}
        >
          {impacts.map((impact, index) => {
            const isLastItem = index === impacts.length - 1;
            return (
              <div 
                key={index}
                className="flex items-center"
                style={{
                  width: '100%',
                  gap: '40px',
                  padding: '24px 60px',
                  borderRadius: '20px',
                  border: isLastItem ? '2px solid #0AEB2C' : '2px solid rgba(255, 202, 43, 0.3)',
                  backgroundColor: isLastItem ? 'rgba(10, 235, 44, 0.1)' : 'rgba(255, 202, 43, 0.05)',
                }}
              >
                <ChevronRight 
                  size={32} 
                  style={{ 
                    color: isLastItem ? '#0AEB2C' : '#FFCA2B',
                    flexShrink: 0,
                  }} 
                />
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 400,
                    fontSize: '32px',
                    lineHeight: '120%',
                    letterSpacing: '0.02em',
                    flex: 1,
                  }}
                >
                  {impact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BreadthOfImpactSlide;