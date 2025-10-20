import React, { useEffect } from 'react';

interface WernersEdgeSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const WernersEdgeSlide: React.FC<WernersEdgeSlideProps> = ({ onNext, onPrevious }) => {
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
      className="relative w-full h-screen overflow-auto"
      style={{
        background: 'linear-gradient(108deg, #000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white z-10"
        style={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        8
      </div>

      {/* Content Container */}
      <div className="relative min-h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
        {/* Title Section */}
        <div 
          className="mb-10"
          style={{
            alignSelf: 'flex-start',
          }}
        >
          <h2 
            className="text-white"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: 'normal',
              letterSpacing: '0.72px',
              borderBottom: '3px solid #FFCA2B',
              paddingBottom: '6px',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            FINANCIAL IMPACTS
          </h2>
        </div>

        {/* Main Heading */}
        <div className="mb-12 w-full">
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '64px',
              lineHeight: 'normal',
              color: '#FFF',
            }}
          >
            Werner's New Competitive Edge
          </h1>
        </div>

        {/* Impact Cards Container */}
        <div 
          className="flex flex-col w-full"
          style={{
            maxWidth: '1520px',
            gap: '24px',
          }}
        >
          {/* Card 1: Increased Revenue */}
          <div 
            className="flex items-start"
            style={{
              padding: '32px 60px',
              gap: '40px',
              borderRadius: '20px',
              border: '2px solid #A4B3FF',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(108deg, #000 37.5%, #14004C 100%)',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0, marginTop: '8px' }}
            >
              <path d="M8 24L18 14L18 34L8 24Z" fill="#FFCA2B"/>
              <path d="M20 24L30 14L30 34L20 24Z" fill="#FFCA2B"/>
            </svg>
            
            <div style={{ flex: 1 }}>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '64px',
                  fontWeight: 700,
                  lineHeight: '60px',
                  letterSpacing: '2.56px',
                  color: '#FFCA2B',
                }}
              >
                Increased Revenue
              </span>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '48px',
                  fontWeight: 400,
                  lineHeight: '60px',
                  letterSpacing: '1.92px',
                  color: '#FFF',
                }}
              >
                {' '}with increase daily miles{' '}
              </span>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '64px',
                  fontWeight: 700,
                  lineHeight: '60px',
                  letterSpacing: '2.56px',
                  color: '#FFCA2B',
                }}
              >
                1-5%
              </span>
            </div>
          </div>

          {/* Card 2: Fuel Savings */}
          <div 
            className="flex items-start"
            style={{
              padding: '32px 60px',
              gap: '40px',
              borderRadius: '20px',
              border: '2px solid #A4B3FF',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(108deg, #000 37.5%, #14004C 100%)',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0, marginTop: '8px' }}
            >
              <path d="M8 24L18 14L18 34L8 24Z" fill="#FFCA2B"/>
              <path d="M20 24L30 14L30 34L20 24Z" fill="#FFCA2B"/>
            </svg>
            
            <div style={{ flex: 1 }}>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '44px',
                  fontWeight: 400,
                  lineHeight: '60px',
                  letterSpacing: '1.76px',
                  color: '#FFF',
                }}
              >
                Fuel Savings{' '}
              </span>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '64px',
                  fontWeight: 700,
                  lineHeight: '60px',
                  letterSpacing: '2.56px',
                  color: '#FFCA2B',
                }}
              >
                1-3%
              </span>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '44px',
                  fontWeight: 400,
                  lineHeight: '60px',
                  letterSpacing: '1.76px',
                  color: '#FFF',
                }}
              >
                {' '}depending on geographies
              </span>
            </div>
          </div>

          {/* Card 3: Missed Deliveries */}
          <div 
            className="flex items-start"
            style={{
              padding: '32px 60px',
              gap: '40px',
              borderRadius: '20px',
              border: '2px solid #A4B3FF',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(108deg, #000 37.5%, #14004C 100%)',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0, marginTop: '8px' }}
            >
              <path d="M8 24L18 14L18 34L8 24Z" fill="#FFCA2B"/>
              <path d="M20 24L30 14L30 34L20 24Z" fill="#FFCA2B"/>
            </svg>
            
            <div style={{ flex: 1 }}>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '44px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '1.76px',
                  color: '#FFF',
                }}
              >
                Reduction in{' '}
              </span>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '64px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  letterSpacing: '2.56px',
                  color: '#FFCA2B',
                }}
              >
                Missed Deliveries
              </span>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '44px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '1.76px',
                  color: '#FFF',
                }}
              >
                {' '}due to accidents and congestion
              </span>
            </div>
          </div>

          {/* Card 4: Drive Time HOS */}
          <div 
            className="flex items-start"
            style={{
              padding: '32px 60px',
              gap: '40px',
              borderRadius: '20px',
              border: '2px solid #A4B3FF',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(108deg, #000 37.5%, #14004C 100%)',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0, marginTop: '8px' }}
            >
              <path d="M8 24L18 14L18 34L8 24Z" fill="#FFCA2B"/>
              <path d="M20 24L30 14L30 34L20 24Z" fill="#FFCA2B"/>
            </svg>
            
            <div style={{ flex: 1 }}>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '44px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '1.76px',
                  color: '#FFF',
                }}
              >
                Maximize Werner's Driver -{' '}
              </span>
              <span 
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: '64px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  letterSpacing: '2.56px',
                  color: '#FFCA2B',
                }}
              >
                Drive Time HOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WernersEdgeSlide;