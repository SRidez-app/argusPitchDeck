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
  ];

  return (
    <div className="relative w-full h-screen overflow-auto bg-black">
      {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white z-10"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 400,
        }}
      >
        4
      </div>

      {/* Content Container */}
      <div className="relative min-h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
        {/* Title Section */}
        <div className="mb-8">
          <h2 
            className="text-white mb-3"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0.02em',
              borderBottom: '3px solid #FFCA2B',
              paddingBottom: '6px',
              display: 'inline-block',
            }}
          >
            THE PROBLEM
          </h2>

             <h1 
            className="text-[#FFCA2B] mt-6"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '72px',
              lineHeight: '110%',
              letterSpacing: '0px',
              maxWidth: '1400px',
            }}
          >
            Impacts to our cities are widespread
          </h1>

        
        </div>

       
        {/* Impact Items Container */}
        <div 
          className="flex flex-col w-full"
          style={{
            maxWidth: '1552px',
            gap: '24px',
          }}
        >
          {/* Regular Impact Items */}
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="flex items-center"
              style={{
                width: '100%',
                gap: '40px',
                paddingTop: '16px',
                paddingRight: '60px',
                paddingBottom: '16px',
                paddingLeft: '60px',
                borderRadius: '20px',
                border: '2px solid rgba(255, 202, 43, 0.3)',
                backgroundColor: 'rgba(255, 202, 43, 0.05)',
              }}
            >
              <ChevronRight 
                size={28} 
                style={{ 
                  color: '#FFCA2B',
                  flexShrink: 0,
                }} 
              />
              <p 
                className="text-white"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '140%',
                  flex: 1,
                }}
              >
                {impact}
              </p>
            </div>
          ))}

          {/* Highlighted Impact Item */}
          <div 
            className="flex items-center"
            style={{
              width: '100%',
              gap: '40px',
              paddingTop: '32px',
              paddingRight: '60px',
              paddingBottom: '32px',
              paddingLeft: '60px',
              borderRadius: '20px',
              border: '2px solid #0AEB2C',
              backgroundColor: 'rgba(10, 235, 44, 0.1)',
            }}
          >
            <ChevronRight 
              size={32} 
              style={{ 
                color: '#0AEB2C',
                flexShrink: 0,
              }} 
            />
            <p 
              className="text-white"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '140%',
                flex: 1,
              }}
            >
              Accident Alerts are delayed resulting in wasted time/fuel and lost revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadthOfImpactSlide;