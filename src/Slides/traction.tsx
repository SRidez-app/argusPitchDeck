'use client';

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  const searchData = [
    { week: '1', searches: 1 },
    { week: '2', searches: 2 },
    { week: '3', searches: 5 },
    { week: '4', searches: 12 },
    { week: '5', searches: 25 },
    { week: '6', searches: 45 },
    { week: '7', searches: 72 },
    { week: '8', searches: 95 },
    { week: '9', searches: 115 },
    { week: '10', searches: 136 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: 'rgba(10, 22, 40, 0.95)',
            border: '2px solid #D4AF37',
            borderRadius: '8px',
            padding: '10px 14px',
            fontFamily: 'Inter',
          }}
        >
          <p style={{ color: '#D4AF37', fontWeight: 600, fontSize: '14px' }}>
            {payload[0].value} searches
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
      }}
    >
      {/* Page Number */}
      <div
        className="fixed bottom-8 right-8 text-gray-800 z-50"
        style={{
          fontFamily: 'Inter',
          fontSize: 'clamp(12px, 1.2vw, 14px)',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        8
      </div>

      {/* Content Container */}
      <div
        className="relative w-full h-full flex flex-col items-start justify-start overflow-y-auto"
        style={{
          padding: 'clamp(40px, 5vh, 60px) clamp(50px, 6vw, 90px)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(212, 175, 55, 0.3) transparent',
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
            background: rgba(212, 175, 55, 0.3);
            border-radius: 4px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: rgba(212, 175, 55, 0.5);
          }
        `}</style>

        {/* Techstars Badge */}
        <div
          className="absolute top-8 right-12 flex flex-col items-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transitionDelay: '600ms',
          }}
        >
          <div
            style={{
              width: 'clamp(100px, 8vw, 120px)',
              height: 'clamp(35px, 3vw, 45px)',
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '6px',
              boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(18px, 1.5vw, 24px)',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              ★ Techstars
            </span>
          </div>
          <div
            style={{
              fontFamily: 'Inter',
              fontSize: 'clamp(12px, 1vw, 14px)',
              fontWeight: 600,
              color: '#0a1628',
            }}
          >
            Techstars '25
          </div>
        </div>

        {/* Title Section */}
        <div
          className="mb-8 w-full transition-all duration-700"
          style={{
            marginBottom: 'clamp(30px, 4vh, 50px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h1
            style={{
              fontFamily: 'Inter',
              fontWeight: 800,
              fontSize: 'clamp(44px, 5vw, 64px)',
              lineHeight: '1.2',
              color: '#0a1628',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#D4AF37' }}>Growth</span> and Traction
          </h1>
        </div>

        {/* Main Content Grid */}
        <div
          className="w-full grid gap-8"
          style={{
            gridTemplateColumns: 'minmax(0, 2.5fr) minmax(0, 1fr)',
            marginBottom: 'clamp(30px, 4vh, 40px)',
          }}
        >
          {/* Mobility Section */}
          <div
            className="transition-all duration-700"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)',
              border: '3px solid #D4AF37',
              borderRadius: '16px',
              padding: 'clamp(30px, 4vh, 50px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transitionDelay: '200ms',
              boxShadow: '0 8px 24px rgba(212, 175, 55, 0.15)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 700,
                color: '#D4AF37',
                marginBottom: 'clamp(30px, 4vh, 50px)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Mobility
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'clamp(30px, 4vw, 50px)',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              {/* DoorDash */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(80px, 10vh, 120px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 900,
                  color: '#FF3008',
                  fontFamily: 'Inter',
                  letterSpacing: '-0.02em',
                }}
              >
                DOORDASH
              </div>

              {/* Werner */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(80px, 10vh, 120px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 900,
                  fontFamily: 'Inter',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #FFB81C 0%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                WERNER
              </div>

              {/* Bringg */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(80px, 10vh, 120px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  fontWeight: 900,
                  color: '#FF5722',
                  fontFamily: 'Inter',
                }}
              >
                BRINGG
              </div>

              {/* Sygic */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(80px, 10vh, 120px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(34px, 4.2vw, 52px)',
                  fontWeight: 900,
                  color: '#C41E3A',
                  fontFamily: 'Inter',
                }}
              >
                SYGIC
              </div>

              {/* Kingdom of Saudi Arabia */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(80px, 10vh, 120px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontWeight: 700,
                  color: '#006C35',
                  fontFamily: 'Inter',
                  textAlign: 'center',
                  lineHeight: '1.3',
                  gridColumn: 'span 2',
                }}
              >
                KINGDOM OF SAUDI ARABIA
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div
            className="transition-all duration-700"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0a1628',
              borderRadius: '16px',
              padding: 'clamp(20px, 2.5vh, 30px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transitionDelay: '300ms',
              boxShadow: '0 4px 16px rgba(10, 22, 40, 0.1)',
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(13px, 1.2vw, 16px)',
                fontWeight: 700,
                color: '#0a1628',
                marginBottom: 'clamp(15px, 2vh, 20px)',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Video Archive Searches by Week
            </h3>
            <div style={{ height: 'clamp(180px, 22vh, 240px)' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={searchData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(10, 22, 40, 0.1)" />
                  <XAxis
                    dataKey="week"
                    stroke="#0a1628"
                    style={{ fontSize: 'clamp(10px, 0.9vw, 12px)', fontFamily: 'Inter', fontWeight: 600 }}
                  />
                  <YAxis
                    stroke="#0a1628"
                    style={{ fontSize: 'clamp(10px, 0.9vw, 12px)', fontFamily: 'Inter', fontWeight: 600 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="searches"
                    stroke="#D4AF37"
                    strokeWidth={3}
                    dot={{ fill: '#D4AF37', stroke: '#0a1628', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div
              style={{
                marginTop: 'clamp(12px, 1.5vh, 16px)',
                padding: 'clamp(10px, 1.2vh, 14px)',
                background: 'linear-gradient(135deg, #D4AF37 0%, #b8941f 100%)',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
              }}
            >
              <div
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  fontWeight: 700,
                  fontFamily: 'Inter',
                  letterSpacing: '0.03em',
                }}
              >
                136x Growth
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div
          className="w-full grid gap-8"
          style={{
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {/* Insurance/PI Section */}
          <div
            className="transition-all duration-700"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0a1628',
              borderRadius: '16px',
              padding: 'clamp(25px, 3vh, 35px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms',
              boxShadow: '0 4px 16px rgba(10, 22, 40, 0.1)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(22px, 2.2vw, 28px)',
                fontWeight: 700,
                color: '#0a1628',
                marginBottom: 'clamp(20px, 2.5vh, 30px)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Insurance/PI
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'clamp(20px, 2.5vw, 30px)',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              {/* AAA */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(50px, 6vh, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 900,
                  color: '#ED1C24',
                  fontFamily: 'Inter',
                }}
              >
                AAA
              </div>

              {/* Carolina Casualty */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(50px, 6vh, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(15px, 1.5vw, 20px)',
                  fontWeight: 700,
                  color: '#333',
                  fontFamily: 'Inter',
                  textAlign: 'center',
                  lineHeight: '1.3',
                }}
              >
                Carolina<br />Casualty
              </div>

              {/* Auto Owners */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(50px, 6vh, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(15px, 1.5vw, 20px)',
                  fontWeight: 700,
                  color: '#0066B2',
                  fontFamily: 'Inter',
                  textAlign: 'center',
                  lineHeight: '1.3',
                }}
              >
                Auto<br />Owners
              </div>
            </div>
          </div>

          {/* Gov't Tech Section */}
          <div
            className="transition-all duration-700"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0a1628',
              borderRadius: '16px',
              padding: 'clamp(25px, 3vh, 35px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '500ms',
              boxShadow: '0 4px 16px rgba(10, 22, 40, 0.1)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(22px, 2.2vw, 28px)',
                fontWeight: 700,
                color: '#0a1628',
                marginBottom: 'clamp(20px, 2.5vh, 30px)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Gov&apos;t Tech
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'clamp(20px, 2.5vw, 30px)',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              {/* FDOT */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(50px, 6vh, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 900,
                  color: '#000',
                  fontFamily: 'Inter',
                }}
              >
                FDOT
              </div>

              {/* MDOT */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(50px, 6vh, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 900,
                  color: '#1E4D8B',
                  fontFamily: 'Inter',
                }}
              >
                MDOT
              </div>

              {/* NDOT */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(50px, 6vh, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 900,
                  color: '#000',
                  fontFamily: 'Inter',
                }}
              >
                NDOT
              </div>

              {/* City of Lancaster */}
              <div
                style={{
                  width: '100%',
                  height: 'clamp(50px, 6vh, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  fontWeight: 700,
                  color: '#333',
                  fontFamily: 'Inter',
                  textAlign: 'center',
                  lineHeight: '1.3',
                }}
              >
                City of<br />Lancaster
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionSlide;