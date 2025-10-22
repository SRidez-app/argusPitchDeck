'use client';

import React, { useEffect, useState } from 'react';

interface TeamAccomplishmentsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TeamAccomplishmentsSlide: React.FC<TeamAccomplishmentsSlideProps> = ({ onNext, onPrevious }) => {
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
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious]);

  const teamAccomplishments = [
    {
      name: 'Robert Putt',
      title: 'Founder & CEO',
      description: 'Robert Putt has a proven track record in scaling startups within the logistics sector and building high-performing data science teams. With deep logistics and data science experience from Amazon, Spreetail and Literati, he\'s transformed industries with vision and innovation.',
    },
    {
      name: 'Torrey Powell',
      title: 'Founder & Chief Technology Officer',
      description: 'Torrey Powell brings deep expertise in government technology as our CTO. He previously served as CTO, leading the development of cutting-edge 911 dispatch software that enhanced emergency response systems nationwide. His visionary leadership culminated in a successful exit, delivering scalable solutions for public safety infrastructure.',
    },
    {
      name: 'Ben Cook',
      title: 'Chief Architecture Officer',
      description: 'Ben Cook is the CAO of Argus AI. Previously founded Sparrow Computing, where he specializes in building machine learning systems for entrepreneurs. A Harvard alumnus with advanced training in machine learning, scientific computing, and data science, Ben was the key driving force behind Hudl\'s computer vision success with 8 years as the founding lead member of the machine learning team, pioneering innovative tech solutions that transformed sports analytics.',
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
        10
      </div>

      {/* Scrollable Content Container */}
      <div 
        className="relative w-full h-full overflow-y-auto px-12 pt-8 pb-12"
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
        <div className="mb-12">
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
              OUR TEAM
            </h2>
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
              fontSize: 'clamp(36px, 4vw, 72px)',
              lineHeight: '1.2',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            Track Record{' '}
            <span style={{ color: '#FFCA2B' }}>& Accomplishments</span>
          </h1>
        </div>

        {/* Team Accomplishments Container */}
        <div 
          className="w-full space-y-8 transition-all duration-1000"
          style={{
            maxWidth: '100%',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
          }}
        >
          {teamAccomplishments.map((member, index) => (
            <div 
              key={index}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150 + 400}ms`,
              }}
            >
              {/* Member Card */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(164, 179, 255, 0.3)',
                  borderRadius: '20px',
                  padding: 'clamp(24px, 2.5vw, 40px) clamp(32px, 3vw, 48px)',
                }}
              >
                {/* Name and Title */}
                <div className="mb-5">
                  <h3
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(28px, 2.5vw, 42px)',
                      fontWeight: 700,
                      color: '#FFCA2B',
                      marginBottom: '12px',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(18px, 1.5vw, 26px)',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {member.title}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: 'clamp(16px, 1.2vw, 22px)',
                    fontWeight: 400,
                    lineHeight: '160%',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAccomplishmentsSlide;