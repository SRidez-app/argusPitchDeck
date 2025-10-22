'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface TheAskSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TheAskSlide: React.FC<TheAskSlideProps> = ({ onNext, onPrevious }) => {
  useEffect(() => {
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

  const objectives = [
    {
      text: "Expand engineering team to accelerate product development and enhance AI capabilities for crash detection and predictive analytics"
    },
    {
      text: "Scale go-to-market operations including sales team expansion, strategic partnerships, and customer acquisition across mobility and government sectors"
    },
    {
      text: "Invest in infrastructure and operational excellence to support rapid growth, including cloud infrastructure, data processing, and customer success operations"
    }
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-y-auto overflow-x-hidden"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
        scrollbarWidth: 'thin',
        scrollbarColor: '#FFCA2B #1a1a1a',
      }}
    >
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        div::-webkit-scrollbar-thumb {
          background: #FFCA2B;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #FFD84D;
        }
      `}</style>

      {/* Page Number */}
      <div 
        className="fixed bottom-8 right-8 text-white z-50"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(12px, 1.2vw, 14px)',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        9
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full max-w-[1920px] mx-auto flex flex-col items-start justify-start"
        style={{
          padding: 'clamp(32px, 4vh, 64px) clamp(48px, 5vw, 96px)',
        }}
      >
        {/* Title Section */}
        <div 
          className="mb-8 w-full"
          style={{
            marginBottom: 'clamp(32px, 4vh, 48px)',
          }}
        >
          <div
            style={{
              width: 'fit-content',
              paddingTop: 'clamp(6px, 0.8vh, 8px)',
              paddingBottom: 'clamp(6px, 0.8vh, 8px)',
              marginBottom: 'clamp(24px, 3vh, 40px)',
            }}
          >
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: 'clamp(28px, 2.5vw, 36px)',
                lineHeight: '1.3',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              BRIDGE TO SEED ROUND
            </h2>
            <div 
              style={{
                borderBottom: '3px solid #FFCA2B',
                width: '100%',
                marginTop: 'clamp(6px, 0.8vh, 8px)',
              }}
            />
          </div>
          
          {/* Main Statement */}
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: 'clamp(40px, 4.5vw, 64px)',
              lineHeight: '1.2',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: 'clamp(32px, 4vh, 48px)',
            }}
          >
            We're raising $500k on $6M post money valuation
          </h1>

          {/* Key Objectives Header */}
          <h3
            style={{
              fontFamily: 'Apercu Pro',
              fontWeight: 500,
              fontSize: 'clamp(32px, 3vw, 44px)',
              lineHeight: '1.3',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              marginBottom: 'clamp(24px, 3vh, 40px)',
            }}
          >
            Key Objectives / Use of Funding:
          </h3>
        </div>

        {/* Objectives List */}
        <div 
          className="w-full flex flex-col"
          style={{
            gap: 'clamp(20px, 2.5vh, 32px)',
          }}
        >
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start"
              style={{
                width: '100%',
                maxWidth: 'clamp(1200px, 87.5vw, 1680px)',
                gap: 'clamp(24px, 2.5vw, 40px)',
                padding: 'clamp(24px, 2.5vh, 32px) clamp(40px, 4vw, 60px)',
                borderRadius: 'clamp(16px, 1.5vw, 20px)',
                border: '2px solid #A4B3FF',
                background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                boxShadow: '0px 4px 14px 0px #00000040',
              }}
            >
              {/* Bullet Point Icon */}
              <div 
                style={{ 
                  flexShrink: 0, 
                  width: 'clamp(32px, 2.5vw, 40px)', 
                  height: 'clamp(32px, 2.5vw, 40px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 'clamp(4px, 0.5vh, 8px)',
                }}
              >
                <Image
                  src="/double_arrow.png"
                  alt="Bullet point"
                  width={40}
                  height={40}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain',
                    filter: 'brightness(0) saturate(100%) invert(81%) sepia(68%) saturate(543%) hue-rotate(359deg) brightness(103%) contrast(101%)',
                  }}
                />
              </div>
              
              {/* Objective Text */}
              <p 
                className="text-white flex-1"
                style={{
                  fontFamily: 'Apercu Pro',
                  fontWeight: 400,
                  fontSize: 'clamp(18px, 1.8vw, 28px)',
                  lineHeight: '1.5',
                  letterSpacing: '0.01em',
                  color: '#FFFFFF',
                }}
              >
                {objective.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheAskSlide;