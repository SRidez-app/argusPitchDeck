import React, { useEffect } from 'react';

interface MachineLearningSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const MachineLearningSlide: React.FC<MachineLearningSlideProps> = ({ onNext, onPrevious }) => {
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
    <div className="relative w-full h-screen overflow-auto">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/accident.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white z-50"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        5
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-full flex flex-col justify-between px-20 py-16">
        {/* Top Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            marginTop: '20px',
          }}
        >
          <h2 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '64px',
              lineHeight: '100%',
              letterSpacing: '0px',
              color: '#FFCA2B',
            }}
          >
            ARGUS AI
          </h2>

          <p 
            className="text-white"
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '52px',
              lineHeight: '115%',
              letterSpacing: '0px',
              maxWidth: '1400px',
            }}
          >
            Using ML we detect traffic anomalies instantly, generate alerts and forecast severity
          </p>
        </div>

        {/* Bottom Statement */}
        <h1 
          className="text-white"
          style={{
            fontFamily: 'Tobias',
            fontWeight: 500,
            fontSize: '56px',
            lineHeight: '115%',
            letterSpacing: '0px',
            textAlign: 'center',
            marginTop: '80px',
            marginBottom: '80px',
            paddingLeft: '60px',
            paddingRight: '60px',
          }}
        >
          We detect the <span style={{ color: '#FFCA2B' }}>incident</span> and{' '}
          <span style={{ color: '#FFCA2B' }}>predict</span> the{' '}
          <span style={{ color: '#FFCA2B' }}>symptoms</span>.
        </h1>
      </div>
    </div>
  );
};

export default MachineLearningSlide;