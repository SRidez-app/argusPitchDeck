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
        { name: 'ATMS Software', values: [true, true, false] },
        { name: 'Incident Operations', values: [true, true, false] },
        { name: 'AI Detection', values: [false, false, true] },
        { name: 'API Alerting service', values: [false, false, true] },
      ],
    },
    {
      category: 'Traffic Analytics/Data',
      competitors: ['INIRX', 'HERE', 'Argus'],
      features: [
        { name: 'Cell Phone Traffic Alerts', values: [true, true, false] },
        { name: 'Traffic Analytics', values: [true, true, false] },
        { name: 'AI detection', values: [false, false, true] },
        { name: 'AI data feed', values: [false, false, true] },
        { name: 'API Alerting service', values: [false, true, true] },
      ],
    },
    {
      category: 'Navigation Service',
      competitors: ['HERE', 'Tom Tom', 'Argus'],
      features: [
        { name: 'SDK Software provider', values: [true, true, false] },
        { name: 'Cell Phone', values: [true, true, false] },
        { name: 'OEM', values: [true, true, false] },
        { name: 'Road Sensors', values: [true, true, false] },
        { name: 'Traffic Cam AI', values: [false, false, true] },
      ],
    },
  ];

  return (
    <div 
      className="relative w-full h-screen overflow-y-auto overflow-x-hidden"
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
        6
      </div>

      {/* Content Container - No centering, natural flow */}
      <div className="relative w-full min-h-full px-16 pt-12 pb-20">
        {/* Title Section */}
        <div className="mb-12 max-w-[1800px]">
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
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              THE CONNECTED MOBILITY ECOSYSTEM
            </h2>
            {/* Gold bar underneath */}
            <div 
              style={{
                borderBottom: '2px solid #FFCA2B',
                width: '100%',
                marginTop: '8px',
              }}
            />
          </div>
          
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '52px',
              lineHeight: '86px',
              letterSpacing: '0px',
              color: '#FFFFFF',
              marginBottom: '8px',
            }}
          >
            Redefining Transportation{' '}
            <span style={{ color: '#FFCA2B' }}>Intelligence</span>
          </h1>
        </div>

        {/* Competitor Tables */}
        <div className="w-full max-w-[1800px] space-y-12">
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
                className="mb-4 px-8 py-4 rounded-t-lg"
                style={{
                  background: 'rgba(255, 202, 43, 0.1)',
                  borderLeft: '4px solid #FFCA2B',
                  borderTop: '1px solid rgba(255, 202, 43, 0.3)',
                  borderRight: '1px solid rgba(255, 202, 43, 0.3)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '24px',
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
                  border: '2px solid #A4B3FF',
                  background: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Table Header */}
                <div 
                  className="grid"
                  style={{
                    gridTemplateColumns: '2.5fr 1fr 1fr 1fr',
                    backgroundColor: 'rgba(164, 179, 255, 0.1)',
                    borderBottom: '2px solid #A4B3FF',
                  }}
                >
                  <div
                    className="px-8 py-5"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Features
                  </div>
                  {section.competitors.map((competitor, idx) => (
                    <div
                      key={idx}
                      className="px-8 py-5 text-center"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: competitor === 'Argus' ? '#FFCA2B' : 'white',
                        backgroundColor: competitor === 'Argus' ? 'rgba(255, 202, 43, 0.15)' : 'transparent',
                        borderLeft: '1px solid rgba(164, 179, 255, 0.3)',
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
                      gridTemplateColumns: '2.5fr 1fr 1fr 1fr',
                      borderBottom: featureIdx < section.features.length - 1 ? '1px solid rgba(164, 179, 255, 0.2)' : 'none',
                      backgroundColor: featureIdx % 2 === 0 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div
                      className="px-8 py-5"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '17px',
                        fontWeight: 400,
                        color: '#FFFFFF',
                      }}
                    >
                      {feature.name}
                    </div>
                    {feature.values.map((value, valueIdx) => (
                      <div
                        key={valueIdx}
                        className="px-8 py-5 flex items-center justify-center"
                        style={{
                          backgroundColor: section.competitors[valueIdx] === 'Argus' ? 'rgba(255, 202, 43, 0.08)' : 'transparent',
                          borderLeft: '1px solid rgba(164, 179, 255, 0.15)',
                        }}
                      >
                        {value ? (
                          <Check 
                            size={28} 
                            style={{ 
                              color: section.competitors[valueIdx] === 'Argus' ? '#0AEB2C' : '#10B981',
                              strokeWidth: 3,
                            }} 
                          />
                        ) : (
                          <Minus 
                            size={28} 
                            style={{ 
                              color: 'rgba(164, 179, 255, 0.3)',
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