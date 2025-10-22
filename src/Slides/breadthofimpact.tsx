import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface BreadthOfImpactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const BreadthOfImpactSlide: React.FC<BreadthOfImpactSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

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

  const problemImpacts = [
    {
      problem: '911/Emergency Responses Delayed',
      impact: 'Impacting lives and serious medical injuries.',
    },
    {
      problem: 'Traffic Ops Monitor 1000s of Cams Manually',
      impact: 'Missing incidents leading to more congestion.',
    },
    {
      problem: 'Traffic Incidents data is fragmented',
      impact: 'Drivers are stuck in traffic with stale alerts.',
    },
    {
      problem: '25% of Auto Claims are Disputed Fault',
      impact: 'Billions are wasted in liability and claims processing.',
    },
    {
      problem: 'Traffic Alerts are delayed 5-15 minutes.',
      impact: 'Adding to congestion, wasted fuel, and poor city investments.',
    },
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number */}
      <div 
        className="fixed bottom-8 right-8 text-white z-50"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        4
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full h-full flex flex-col items-start justify-start px-12 pt-8 pb-12 overflow-y-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            width: 8px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background: rgba(255, 202, 43, 0.3);
            border-radius: 4px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 202, 43, 0.5);
          }
        `}</style>

        {/* Title Section */}
        <div className="mb-8">
          <div
            style={{
              width: 'fit-content',
              paddingTop: '8px',
              paddingBottom: '8px',
              marginBottom: '40px',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: 'clamp(24px, 2vw, 36px)',
                lineHeight: '1.2',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              THE PROBLEM
            </h2>
            {/* Gold bar underneath */}
            <div 
              style={{
                borderBottom: '3px solid #FFCA2B',
                width: '100%',
                marginTop: '8px',
              }}
            />
          </div>
          
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: 'clamp(40px, 5vw, 96px)',
              lineHeight: '1.1',
              letterSpacing: '0px',
              color: '#FFCA2B',
            }}
          >
            Impacts to our cities are widespread
          </h1>
        </div>

        {/* Column Headers */}
        <div 
          className="flex items-center w-full transition-all duration-1000"
          style={{
            maxWidth: '100%',
            marginBottom: 'clamp(16px, 1.5vw, 24px)',
            paddingLeft: 'clamp(32px, 3.5vw, 64px)',
            paddingRight: 'clamp(32px, 3.5vw, 64px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(20px, 1.8vw, 32px)',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
              }}
            >
              PROBLEM
            </h3>
          </div>
          <div style={{ width: 'clamp(60px, 5vw, 100px)' }} />
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontSize: 'clamp(20px, 1.8vw, 32px)',
                fontWeight: 700,
                color: '#FFCA2B',
                letterSpacing: '0.02em',
              }}
            >
              IMPACT
            </h3>
          </div>
        </div>

        {/* Problem → Impact Rows */}
        <div 
          className="flex flex-col w-full"
          style={{
            maxWidth: '100%',
            gap: 'clamp(16px, 1.5vw, 28px)',
            paddingLeft: 'clamp(32px, 3.5vw, 64px)',
            paddingRight: 'clamp(32px, 3.5vw, 64px)',
          }}
        >
          {problemImpacts.map((item, index) => (
            <div 
              key={index}
              className="flex items-center transition-all duration-1000"
              style={{
                gap: 'clamp(16px, 2vw, 32px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150 + 300}ms`,
              }}
            >
              {/* Problem Box */}
              <div
                style={{
                  flex: 1,
                  minHeight: 'clamp(70px, 5vw, 90px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '2px solid rgba(164, 179, 255, 0.3)',
                  borderRadius: 'clamp(12px, 1vw, 16px)',
                  padding: 'clamp(16px, 1.5vw, 24px) clamp(20px, 1.8vw, 28px)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(16px, 1.2vw, 22px)',
                    fontWeight: 500,
                    lineHeight: '140%',
                    color: '#FFFFFF',
                  }}
                >
                  {item.problem}
                </p>
              </div>

              {/* Arrow */}
              <div
                style={{
                  width: 'clamp(60px, 5vw, 100px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowRight 
                  size={Math.min(Math.max(window.innerWidth * 0.03, 36), 56)} 
                  color="#FFCA2B" 
                  strokeWidth={2.5}
                />
              </div>

              {/* Impact Box */}
              <div
                style={{
                  flex: 1,
                  minHeight: 'clamp(70px, 5vw, 90px)',
                  backgroundColor: 'rgba(255, 202, 43, 0.08)',
                  border: '2px solid rgba(255, 202, 43, 0.4)',
                  borderRadius: 'clamp(12px, 1vw, 16px)',
                  padding: 'clamp(16px, 1.5vw, 24px) clamp(20px, 1.8vw, 28px)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(16px, 1.2vw, 22px)',
                    fontWeight: 500,
                    lineHeight: '140%',
                    color: '#FFCA2B',
                  }}
                >
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadthOfImpactSlide;