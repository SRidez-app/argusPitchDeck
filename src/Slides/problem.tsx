import React, { useEffect } from 'react';

interface ProblemSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const ProblemSlide: React.FC<ProblemSlideProps> = ({ onNext, onPrevious }) => {
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

  const cards = [
    {
      image: '/city.png',
      title: 'Extreme Fragmentation - 300+ unique camera network',
    },
    {
      image: '/crash.png',
      title: 'Accidents and congestion notifications are slow',
    },
    {
      image: '/medic.png',
      title: "911 calls, Waze, Cell Phone Data, DOT data don't talk.",
    },
  ];

  return (
    <div 
      className="relative w-full min-h-screen overflow-auto"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      
      {/* Scaling wrapper */}
      <div style={{ 
        transform: 'scale(0.85)', 
        transformOrigin: 'top left',
        width: '117.65%',
        height: '117.65%'
      }}>
        {/* Page Number - Fixed Position */}
        <div 
          className="fixed bottom-8 right-8 text-white z-50"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '18px',
            fontWeight: 400,
            opacity: 0.6,
          }}
        >
          2
        </div>
        
        {/* Content Container */}
        <div className="relative min-h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
          {/* Title Section */}
          <div className="mb-16">
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
              className="text-white mt-8"
              style={{
                fontFamily: 'Tobias',
                fontWeight: 500,
                fontSize: '72px',
                lineHeight: '100%',
                letterSpacing: '0px',
                maxWidth: '1400px',
              }}
            >
              There are over 1m+ traffic cameras nationwide,{' '}
              but data is <span style={{ color: '#FFCA2B' }}>vanishing</span>.
            </h1>
          </div>

          {/* Cards Container */}
          <div 
            className="flex justify-center items-stretch w-full"
            style={{
              gap: '64px',
              maxWidth: '1640px',
              height: '576px',
            }}
          >
            {cards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden flex flex-col"
                style={{
                  flex: '1',
                  maxWidth: '380px',
                  minWidth: '280px',
                }}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-gray-200">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Yellow accent bar at bottom of image */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: '#FFCA2B' }}
                  />
                </div>
                
                {/* Card Text */}
                <div className="p-5 flex-1 flex items-center justify-center">
                  <p 
                    className="text-center text-black"
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontWeight: 500,
                      fontSize: '30px',
                      lineHeight: '120%',
                      letterSpacing: '2%',
                      maxWidth: index === 0 ? '464px' : '452px',
                      height: '72px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {card.title}
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

export default ProblemSlide;