'use client';

import React, { useEffect, useState } from 'react';

interface TamSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TamSlide: React.FC<TamSlideProps> = ({ onNext, onPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);

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

  const marketData = [
    {
      vertical: 'Insurance Claims',
      tam: 50,
      sam: 20,
      som: 9,
      total: 79,
    },
    {
      vertical: 'ITS Software',
      tam: 35,
      sam: 14,
      som: 7,
      total: 56,
    },
    {
      vertical: '911 PSAP',
      tam: 11,
      sam: 4,
      som: 3,
      total: 18,
    },
    {
      vertical: 'Mobility & Navigation',
      tam: 30,
      sam: 12,
      som: 6,
      total: 48,
    },
  ];

  const maxValue = 80;
  const yAxisLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80];

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
        5
      </div>

      {/* Content Container */}
      <div className="relative min-h-full flex flex-col items-center justify-center px-12 py-16">
        {/* Title */}
        <h1 
          className="text-white mb-20 transition-all duration-1000"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 700,
            fontSize: '44px',
            lineHeight: '120%',
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            letterSpacing: '-0.02em',
          }}
        >
          Market Sizes by Vertical <span style={{ color: '#FFCA2B' }}>(Billions USD)</span>
        </h1>

        {/* Chart Area with Grid */}
        <div 
          className="relative"
          style={{
            maxWidth: '1100px',
            width: '100%',
            marginBottom: '32px',
          }}
        >
          {/* Y-axis labels and grid lines */}
          <div 
            className="absolute left-0 flex flex-col justify-between"
            style={{
              height: '350px',
              width: '40px',
              paddingRight: '10px',
            }}
          >
            {yAxisLabels.reverse().map((label) => (
              <div key={label} className="relative" style={{ height: '0px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    position: 'absolute',
                    right: '0',
                    top: '-7px',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Grid lines */}
          <div 
            className="absolute"
            style={{
              left: '50px',
              right: '0',
              height: '350px',
            }}
          >
            {yAxisLabels.map((label) => (
              <div
                key={`grid-${label}`}
                style={{
                  position: 'absolute',
                  bottom: `${(label / maxValue) * 100}%`,
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              />
            ))}
          </div>

          {/* Chart Container */}
          <div 
            className="flex justify-center items-end"
            style={{
              marginLeft: '50px',
              height: '350px',
              gap: '40px',
            }}
          >
            {marketData.map((data, index) => {
              const barHeightPercentage = (data.total / maxValue) * 100;
              const tamPercentage = (data.tam / data.total) * 100;
              const samPercentage = (data.sam / data.total) * 100;
              const somPercentage = (data.som / data.total) * 100;

              return (
                <div 
                  key={index}
                  className="flex flex-col items-center"
                  style={{
                    flex: 1,
                    maxWidth: '180px',
                  }}
                >
                  {/* Total Value Label */}
                  <div
                    className="mb-2 transition-all duration-1000"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                      transitionDelay: `${index * 100 + 600}ms`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#FFCA2B',
                      }}
                    >
                      ${data.total}B
                    </span>
                  </div>

                  {/* Bar Container */}
                  <div 
                    className="w-full relative rounded-lg overflow-hidden"
                    style={{
                      height: '320px',
                    }}
                  >
                    {/* Bar Stack */}
                    <div 
                      className="absolute bottom-0 w-full flex flex-col-reverse transition-all duration-1200 ease-out"
                      style={{
                        height: isVisible ? `${barHeightPercentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* TAM - Blue */}
                      <div 
                        className="w-full relative transition-all duration-1000 ease-out"
                        style={{
                          height: `${tamPercentage}%`,
                          backgroundColor: '#3B82F6',
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${index * 100 + 200}ms`,
                        }}
                      >
                        {data.tam >= 10 && (
                          <span
                            className="absolute inset-0 flex items-center justify-center text-white font-bold"
                            style={{
                              fontSize: '15px',
                              fontFamily: 'var(--font-inter)',
                            }}
                          >
                            ${data.tam}B
                          </span>
                        )}
                      </div>
                      
                      {/* SAM - Green */}
                      <div 
                        className="w-full relative transition-all duration-1000 ease-out"
                        style={{
                          height: `${samPercentage}%`,
                          backgroundColor: '#10B981',
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${index * 100 + 400}ms`,
                        }}
                      >
                        {data.sam >= 5 && (
                          <span
                            className="absolute inset-0 flex items-center justify-center text-white font-bold"
                            style={{
                              fontSize: '15px',
                              fontFamily: 'var(--font-inter)',
                            }}
                          >
                            ${data.sam}B
                          </span>
                        )}
                      </div>
                      
                      {/* SOM - Orange */}
                      <div 
                        className="w-full relative rounded-t-lg transition-all duration-1000 ease-out"
                        style={{
                          height: `${somPercentage}%`,
                          backgroundColor: '#F59E0B',
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${index * 100 + 600}ms`,
                        }}
                      >
                        <span
                          className="absolute inset-0 flex items-center justify-center text-white font-bold"
                          style={{
                            fontSize: '15px',
                            fontFamily: 'var(--font-inter)',
                          }}
                        >
                          ${data.som}B
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vertical Labels - Outside Grid Below */}
          <div 
            className="flex justify-center items-start"
            style={{
              marginLeft: '50px',
              marginTop: '20px',
              gap: '40px',
            }}
          >
            {marketData.map((data, index) => (
              <div 
                key={index}
                style={{
                  flex: 1,
                  maxWidth: '180px',
                }}
              >
                <p 
                  className="text-white text-center transition-all duration-1000"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '15px',
                    fontWeight: 500,
                    opacity: isVisible ? 0.9 : 0,
                    transitionDelay: `${index * 100 + 800}ms`,
                    lineHeight: '130%',
                  }}
                >
                  {data.vertical}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* X-axis Label */}
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '32px',
            marginTop: '8px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s',
            transitionDelay: '1000ms',
          }}
        >
          Industry Verticals
        </div>

        {/* Legend */}
        <div 
          className="flex gap-8 justify-center items-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1200ms',
          }}
        >
          <div className="flex items-center gap-2.5">
            <div 
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: '#3B82F6' }}
            />
            <span 
              className="text-white"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              TAM (Global)
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div 
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: '#10B981' }}
            />
            <span 
              className="text-white"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              SAM (Global)
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div 
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: '#F59E0B' }}
            />
            <span 
              className="text-white"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              SOM (U.S.)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamSlide;