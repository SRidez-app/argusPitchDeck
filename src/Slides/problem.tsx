import React, { useEffect } from 'react';
import Image from 'next/image';

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
      title: 'Accidents happen without public notification',
    },
    {
      image: '/medic.png',
      title: "911 calls, Waze, Cell Phone Data, DOT data don't talk.",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
        }}
      />
 {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 400,
        }}
      >
        2
      </div>
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
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
            className="text-white mt-6"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '110%',
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
          className="flex justify-start items-stretch w-full"
          style={{
            gap: '32px',
            maxWidth: '100%',
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
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
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
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '140%',
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
  );
};

export default ProblemSlide;