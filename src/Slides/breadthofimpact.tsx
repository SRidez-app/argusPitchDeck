import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface BreadthOfImpactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const BreadthOfImpactSlide: React.FC<BreadthOfImpactSlideProps> = ({ onNext, onPrevious }) => {
  const [scale, setScale] = useState(1);

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

  const impacts = [
    {
      text: '35% of Accidents are disputed fault and fraudulent',
      icon: '/icon.png',
      isHighlighted: false,
      fontSize: '40px',
    },
    {
      text: '911/Emergency Response is delayed and lives are impacted',
      icon: '/icon.png',
      isHighlighted: false,
      fontSize: '40px',
    },
    {
      text: 'DOT Dept. - Struggle to manage congestion in response to incidents',
      icon: '/icon.png',
      isHighlighted: false,
      fontSize: '40px',
    },
    {
      text: 'Accident Alerts are delayed resulting in wasted time/fuel and lost revenue.',
      icon: '/icongreen.png',
      isHighlighted: true,
      fontSize: '64px',
    },
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: '#000000',
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
          <div className="mb-16">
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
                width: '1680px',
                height: '115px',
                color: '#FFCA2B',
              }}
            >
              Impacts to our cities are widespread
            </h1>
          </div>

          {/* Impact Items Container */}
          <div 
            className="flex flex-col"
            style={{
              width: '1680px',
              gap: '83px',
              paddingLeft: '64px',
              paddingRight: '64px',
            }}
          >
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className="flex items-center"
                style={{
                  width: '1552px',
                  minHeight: impact.isHighlighted ? '176px' : index === 0 ? '79px' : index === 1 ? '92px' : '82px',
                  gap: '40px',
                  paddingTop: '16px',
                  paddingRight: '60px',
                  paddingBottom: '16px',
                  paddingLeft: '60px',
                  borderRadius: '20px',
                  border: impact.isHighlighted ? '2px solid #A4B3FF' : '2px solid #A4B3FF',
                  background: 'transparent',
                }}
              >
                {/* Icon Bullet */}
                <div 
                  style={{ 
                    flexShrink: 0, 
                    width: '47.43px', 
                    height: '60px',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={impact.icon}
                    alt="Bullet icon"
                    width={47}
                    height={60}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                
                {/* Text */}
                <p 
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 400,
                    fontSize: impact.fontSize,
                    lineHeight: '100%',
                    letterSpacing: '0.02em',
                    flex: 1,
                    color: impact.isHighlighted ? '#FFCA2B' : '#FFFFFF',
                  }}
                >
                  {impact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadthOfImpactSlide;