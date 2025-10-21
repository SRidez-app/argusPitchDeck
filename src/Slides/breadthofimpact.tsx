import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface BreadthOfImpactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const BreadthOfImpactSlide: React.FC<BreadthOfImpactSlideProps> = ({ onNext, onPrevious }) => {
  const [scale, setScale] = useState(1);
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

  useEffect(() => {
    const updateScale = () => {
      const designWidth = 1920;
      const designHeight = 1080;
      
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      const newScale = Math.min(scaleX, scaleY, 1);
      
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number - Outside scaling wrapper */}
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

      {/* Scaling wrapper */}
      <div 
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          width: '1920px',
          height: '1080px',
          position: 'relative',
        }}
      >
        {/* Content Container */}
        <div className="relative w-full h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
          {/* Title Section */}
          <div className="mb-12">
            <div
              style={{
                width: '262px',
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
                  fontSize: '36px',
                  lineHeight: '44px',
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
                fontSize: '96px',
                lineHeight: '100%',
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
              maxWidth: '1700px',
              marginBottom: '24px',
              paddingLeft: '64px',
              paddingRight: '64px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            }}
          >
            <div style={{ width: '620px' }}>
              <h3
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                }}
              >
                PROBLEM
              </h3>
            </div>
            <div style={{ width: '100px' }} />
            <div style={{ width: '620px' }}>
              <h3
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: '32px',
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
              maxWidth: '1700px',
              gap: '28px',
              paddingLeft: '64px',
              paddingRight: '64px',
            }}
          >
            {problemImpacts.map((item, index) => (
              <div 
                key={index}
                className="flex items-center transition-all duration-1000"
                style={{
                  gap: '32px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 150 + 300}ms`,
                }}
              >
                {/* Problem Box */}
                <div
                  style={{
                    width: '620px',
                    minHeight: '90px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '2px solid rgba(164, 179, 255, 0.3)',
                    borderRadius: '16px',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: '22px',
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
                    width: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowRight 
                    size={56} 
                    color="#FFCA2B" 
                    strokeWidth={2.5}
                  />
                </div>

                {/* Impact Box */}
                <div
                  style={{
                    width: '620px',
                    minHeight: '90px',
                    backgroundColor: 'rgba(255, 202, 43, 0.08)',
                    border: '2px solid rgba(255, 202, 43, 0.4)',
                    borderRadius: '16px',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: '22px',
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
    </div>
  );
};

export default BreadthOfImpactSlide;