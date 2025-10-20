import React, { useEffect } from 'react';

interface LatencySlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const LatencySlide: React.FC<LatencySlideProps> = ({ onNext, onPrevious }) => {
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

  const steps = [
    'Data Collection from Phones - 0.5-1 min. depending on batching',
    'Server Transmission - 0.5-1 min. network processing',
    'Processing Aggregation/Confidence - 3-4 min.',
    'Final Database update, API push to endpoints. - 0.5 - 1 min.',
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-auto"
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
        6
      </div>

      {/* Content Container */}
      <div className="relative min-h-full flex flex-col items-center justify-start px-12 pt-8 pb-12">
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
              fontSize: '32px',
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
        </div>

        {/* Main Heading */}
        <div className="mb-8 w-full flex justify-center">
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '72px',
              lineHeight: '110%',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#FFCA2B',
              maxWidth: '1400px',
            }}
          >
            Current traffic data providers detect the symptoms...
          </h1>
        </div>

        {/* Latency Box */}
        <div
          className="mb-8 mt-8"
          style={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <h2 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0px',
              color: '#FFCA2B',
            }}
          >
            Latency - 5-15 min
          </h2>
        </div>

        {/* Steps Container */}
        <div 
          className="flex flex-col w-full items-center"
          style={{
            maxWidth: '1400px',
            gap: '16px',
          }}
        >THE ARGUS ADVANTAGE
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-center"
              style={{
                width: '100%',
                minHeight: '64px',
                gap: '24px',
                paddingTop: '14px',
                paddingRight: '40px',
                paddingBottom: '14px',
                paddingLeft: '40px',
                borderRadius: '16px',
                border: '2px solid #A4B3FF',
                background: 'transparent',
              }}
            >
              {/* Triangle Play Icon */}
              <svg
                width="20"
                height="24"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M0 0L24 14L0 28V0Z"
                  fill="#FFCA2B"
                />
              </svg>
              
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
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatencySlide;