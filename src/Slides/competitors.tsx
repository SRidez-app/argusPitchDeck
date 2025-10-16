'use client';

import React, { useEffect, useState } from 'react';
import { Check, Minus } from 'lucide-react';

interface CompetitorsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const CompetitorsSlide: React.FC<CompetitorsSlideProps> = ({ onNext, onPrevious }) => {
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

  const competitorData = [
    {
      category: 'DOT/ ITS',
      competitors: ['Iteris', 'SWRI', 'Argus'],
      features: [
        { name: 'ATMS Software', values: [false, false, true] },
        { name: 'Incident Operations', values: [false, false, true] },
        { name: 'AI Detection', values: [true, true, false] },
        { name: 'API Alerting service', values: [true, true, false] },
      ],
    },
    {
      category: 'Traffic Analytics/Data',
      competitors: ['INIRX', 'HERE', 'Argus'],
      features: [
        { name: 'Cell Phone Traffic Alerts', values: [false, false, true] },
        { name: 'Traffic Analytics', values: [false, false, true] },
        { name: 'AI detection', values: [true, true, false] },
        { name: 'AI data feed', values: [true, true, false] },
        { name: 'API Alerting service', values: [true, false, false] },
      ],
    },
    {
      category: 'Navigation Service',
      competitors: ['HERE', 'Tom Tom', 'Argus'],
      features: [
        { name: 'SDK Software provider', values: [false, false, true] },
        { name: 'Cell Phone', values: [false, false, true] },
        { name: 'OEM', values: [false, false, true] },
        { name: 'Road Sensors', values: [false, false, true] },
        { name: 'Traffic Cam AI', values: [true, true, false] },
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-auto bg-black">
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
            THE CONNECTED MOBILITY ECOSYSTEM
          </h2>
        </div>

        {/* Subtitle */}
        <h1 
          className="text-white mb-16 transition-all duration-1000 text-center w-full"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontSize: '42px',
            lineHeight: '120%',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            letterSpacing: '-0.01em',
          }}
        >
          Redefining Transportation Intelligence
        </h1>

        {/* Competitor Tables */}
        <div className="w-full space-y-10">
          {competitorData.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${sectionIndex * 200}ms`,
              }}
            >
              {/* Category Header */}
              <div 
                className="mb-4 px-6 py-3 rounded-t-lg"
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 202, 43, 0.2) 0%, rgba(255, 202, 43, 0.05) 100%)',
                  borderLeft: '4px solid #FFCA2B',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFCA2B',
                    letterSpacing: '0.02em',
                  }}
                >
                  {section.category}
                </h3>
              </div>

              {/* Table */}
              <div 
                className="rounded-lg overflow-hidden"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Table Header */}
                <div 
                  className="grid"
                  style={{
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    className="px-6 py-4"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.6)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Features
                  </div>
                  {section.competitors.map((competitor, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-4 text-center"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: competitor === 'Argus' ? '#FFCA2B' : 'white',
                        backgroundColor: competitor === 'Argus' ? 'rgba(255, 202, 43, 0.1)' : 'transparent',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      {competitor}
                    </div>
                  ))}
                </div>

                {/* Table Rows */}
                {section.features.map((feature, featureIdx) => (
                  <div
                    key={featureIdx}
                    className="grid"
                    style={{
                      gridTemplateColumns: '2fr 1fr 1fr 1fr',
                      borderBottom: featureIdx < section.features.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      backgroundColor: featureIdx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                    }}
                  >
                    <div
                      className="px-6 py-4"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: 'rgba(255, 255, 255, 0.9)',
                      }}
                    >
                      {feature.name}
                    </div>
                    {feature.values.map((value, valueIdx) => (
                      <div
                        key={valueIdx}
                        className="px-6 py-4 flex items-center justify-center"
                        style={{
                          backgroundColor: section.competitors[valueIdx] === 'Argus' ? 'rgba(255, 202, 43, 0.05)' : 'transparent',
                          borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                        }}
                      >
                        {value ? (
                          <Check 
                            size={24} 
                            style={{ 
                              color: section.competitors[valueIdx] === 'Argus' ? '#0AEB2C' : '#10B981',
                              strokeWidth: 3,
                            }} 
                          />
                        ) : (
                          <Minus 
                            size={24} 
                            style={{ 
                              color: 'rgba(255, 255, 255, 0.2)',
                              strokeWidth: 2,
                            }} 
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitorsSlide;