'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, Zap, Target } from 'lucide-react';

interface TractionSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TractionSlide: React.FC<TractionSlideProps> = ({ onNext, onPrevious }) => {
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

  const quarters = [
    {
      quarter: 'Q1 2025',
      phase: 'DEVELOPMENT',
      icon: <Zap size={32} color="#FFCA2B" strokeWidth={2.5} />,
      highlights: [
        'TDG AI Model Development (Passive)',
        'Multiple tagging iterations & retraining',
        'AI model & application development',
        'Argus cost reduction achieved',
        'True IP and differentiation established',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
    },
    {
      quarter: 'Q2 2025',
      phase: 'TRACTION / SALES',
      icon: <TrendingUp size={32} color="#FFCA2B" strokeWidth={2.5} />,
      highlights: [
        'Sales to Insurance & PI/Law Firms launched',
        'September 1st: DOTs/ITS partnerships',
        'October 1st: Legal PLG (Product-Led Growth)',
        'Revenue generation begins',
        'Market validation achieved',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
    },
    {
      quarter: 'Q3 2025',
      phase: 'INNOVATION',
      icon: <Target size={32} color="#FFCA2B" strokeWidth={2.5} />,
      highlights: [
        'V2 Launch: Argus AI Model (Real-Time)',
        'Live incident detection capability',
        'Enhanced predictive analytics',
        'Expanded market reach',
        'Scalable infrastructure deployed',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
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
              MOMENTUM & MILESTONES
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
              fontSize: 'clamp(40px, 5vw, 96px)',
              lineHeight: '1.1',
              letterSpacing: '0px',
              color: '#FFFFFF',
            }}
          >
            Our <span style={{ color: '#FFCA2B' }}>Traction</span> Journey
          </h1>
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(18px, 1.5vw, 28px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.8)',
              marginTop: '16px',
              maxWidth: '900px',
            }}
          >
            From groundbreaking AI development to market-leading sales momentum
          </p>
        </div>

        {/* Timeline */}
        <div 
          className="w-full flex flex-col"
          style={{
            gap: 'clamp(24px, 3vh, 40px)',
            paddingLeft: 'clamp(20px, 2vw, 40px)',
            paddingRight: 'clamp(20px, 2vw, 40px)',
          }}
        >
          {quarters.map((quarter, index) => (
            <div 
              key={index}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transitionDelay: `${index * 200 + 300}ms`,
              }}
            >
              <div
                style={{
                  background: quarter.color,
                  border: `3px solid ${quarter.borderColor}`,
                  borderRadius: 'clamp(16px, 1.5vw, 24px)',
                  padding: 'clamp(28px, 3vh, 44px) clamp(32px, 3.5vw, 56px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Quarter Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: 'clamp(20px, 2.5vh, 32px)',
                    right: 'clamp(24px, 3vw, 40px)',
                    background: '#FFCA2B',
                    color: '#000000',
                    padding: 'clamp(8px, 1vh, 12px) clamp(16px, 1.5vw, 24px)',
                    borderRadius: '8px',
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: 'clamp(14px, 1.2vw, 20px)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  {quarter.quarter}
                </div>

                {/* Header */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(16px, 1.5vw, 24px)',
                    marginBottom: 'clamp(24px, 2.5vh, 36px)',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(56px, 5vw, 72px)',
                      height: 'clamp(56px, 5vw, 72px)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid rgba(255, 202, 43, 0.3)',
                    }}
                  >
                    {quarter.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Inter, var(--font-inter)',
                      fontSize: 'clamp(24px, 2.2vw, 36px)',
                      fontWeight: 700,
                      color: '#FFCA2B',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {quarter.phase}
                  </h3>
                </div>

                {/* Highlights */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 1.2vh, 16px)',
                  }}
                >
                  {quarter.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'clamp(12px, 1.2vw, 16px)',
                      }}
                    >
                      <div
                        style={{
                          minWidth: 'clamp(8px, 0.8vw, 10px)',
                          minHeight: 'clamp(8px, 0.8vw, 10px)',
                          maxWidth: 'clamp(8px, 0.8vw, 10px)',
                          maxHeight: 'clamp(8px, 0.8vw, 10px)',
                          background: '#FFCA2B',
                          borderRadius: '50%',
                          marginTop: 'clamp(6px, 0.6vh, 8px)',
                        }}
                      />
                      <p
                        style={{
                          fontFamily: 'Apercu Pro',
                          fontSize: 'clamp(16px, 1.3vw, 22px)',
                          fontWeight: 500,
                          color: '#FFFFFF',
                          lineHeight: '1.5',
                          flex: 1,
                        }}
                      >
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div
          className="mt-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '900ms',
            paddingLeft: 'clamp(20px, 2vw, 40px)',
            paddingRight: 'clamp(20px, 2vw, 40px)',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 202, 43, 0.08)',
              border: '2px solid rgba(255, 202, 43, 0.3)',
              borderRadius: '16px',
              padding: 'clamp(24px, 2.5vh, 36px) clamp(32px, 3.5vw, 48px)',
            }}
          >
            <p
              style={{
                fontFamily: 'Apercu Pro',
                fontSize: 'clamp(18px, 1.5vw, 26px)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: '1.6',
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#FFCA2B', fontWeight: 700 }}>Rapid execution</span> across product development, 
              market validation, and revenue generation — positioning <span style={{ color: '#FFCA2B', fontWeight: 700 }}>ARGUS AI</span> as 
              the definitive leader in AI-powered traffic intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionSlide;