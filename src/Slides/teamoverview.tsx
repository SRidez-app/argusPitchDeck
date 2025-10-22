'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface TeamOverviewSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TeamOverviewSlide: React.FC<TeamOverviewSlideProps> = ({ onNext, onPrevious }) => {
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

  const teamMembers = [
    {
      name: 'Robert Putt',
      title: 'Founder & CEO',
      image: '/robert.png',
      expertise: ['Logistics', 'Data Science', 'Startup Scaling'],
    },
    {
      name: 'Torrey Powell',
      title: 'Founder & Chief Technology Officer',
      image: '/torrey.png',
      expertise: ['Government Tech', '911 Systems', 'Public Safety'],
    },
    {
      name: 'Ben Cook',
      title: 'Chief Architecture Officer',
      image: '/ben.png',
      expertise: ['Machine Learning', 'Computer Vision', 'AI Architecture'],
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
        9
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
            Leadership{' '}
            <span style={{ color: '#FFCA2B' }}>Overview</span>
          </h1>
        </div>

        {/* Team Cards Container */}
        <div 
          className="flex justify-center items-stretch w-full transition-all duration-1000"
          style={{
            gap: 'clamp(20px, 2.5vw, 40px)',
            maxWidth: '100%',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
            flexWrap: 'wrap',
          }}
        >
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white overflow-hidden flex flex-col transition-all duration-1000"
              style={{
                width: 'clamp(280px, 28vw, 512px)',
                borderRadius: '20px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transitionDelay: `${index * 150 + 400}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative w-full bg-gray-200" style={{ height: 'clamp(250px, 22vw, 400px)' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {/* Yellow accent bar at bottom of image */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: '#FFCA2B' }}
                />
              </div>
              
              {/* Card Content */}
              <div 
                className="flex-1 flex flex-col justify-center"
                style={{
                  padding: 'clamp(20px, 2vw, 32px)',
                }}
              >
                {/* Name */}
                <h3 
                  className="text-black"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 1.8vw, 32px)',
                    lineHeight: '120%',
                    marginBottom: '8px',
                  }}
                >
                  {member.name}
                </h3>
                
                {/* Title */}
                <p 
                  className="text-black"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 1.1vw, 20px)',
                    lineHeight: '130%',
                    marginBottom: '20px',
                    opacity: 0.8,
                  }}
                >
                  {member.title}
                </p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        fontFamily: 'Apercu Pro',
                        fontWeight: 500,
                        fontSize: 'clamp(12px, 1.1vw, 20px)',
                        padding: 'clamp(4px, 0.4vw, 6px) clamp(10px, 0.8vw, 14px)',
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        borderRadius: '20px',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamOverviewSlide;