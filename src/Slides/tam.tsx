'use client';

import React, { useEffect, useState } from 'react';

interface TamSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TamSlide: React.FC<TamSlideProps> = ({ onNext, onPrevious }) => {
  const [scale, setScale] = useState(1);
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

  useEffect(() => {
    const updateScale = () => {
      const designWidth = 1920;
      const designHeight = 1080;
      
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      const newScale = Math.min(scaleX, scaleY, 1);
      
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const marketData = [
    {
      vertical: 'Insurance Claims',
      tam: 50,
      sam: 20,
      som: 9,
    },
    {
      vertical: 'Government',
      tam: 46,
      sam: 18,
      som: 10,
    },
    {
      vertical: 'Mobility & Navigation',
      tam: 30,
      sam: 12,
      som: 6,
    },
  ];

  const maxValue = 80;
  const yAxisLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number - Outside scaling wrapper */}
      <div 
        className="fixed bottom-8 right-8 text-white z-50"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        5
      </div>

      {/* Scaling wrapper */}
      <div 
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          width: '1920px',
          height: '1080px',
          position: 'relative',
        }}
      >
        {/* Content Container */}
        <div className="relative w-full h-full flex px-12 pt-8 pb-12">
          {/* Left Side - Chart */}
          <div className="flex flex-col items-start justify-start flex-1" style={{ width: '1200px' }}>
            {/* Title Section */}
            <div className="mb-16">
              <div
                style={{
                  width: '450px',
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
                    fontSize: '36px',
                    lineHeight: '49px',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MARKET OPPORTUNITY
                </h2>
                {/* Gold bar underneath */}
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
                  fontSize: '72px',
                  lineHeight: '86px',
                  letterSpacing: '0px',
                  color: '#FFFFFF',
                }}
              >
                Market Sizes by Vertical{' '}
                <span style={{ color: '#FFCA2B' }}>(Billions USD)</span>
              </h1>
            </div>

            {/* Chart Area with Grid */}
            <div 
              className="relative"
              style={{
                width: '1100px',
                marginBottom: '32px',
                marginLeft: '64px',
              }}
            >
              {/* Y-axis labels and grid lines */}
              <div 
                className="absolute left-0 flex flex-col justify-between"
                style={{
                  height: '450px',
                  width: '40px',
                  paddingRight: '10px',
                }}
              >
                {yAxisLabels.reverse().map((label) => (
                  <div key={label} className="relative" style={{ height: '0px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '14px',
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
                  height: '450px',
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
                className="flex items-end"
                style={{
                  marginLeft: '50px',
                  height: '450px',
                  gap: '60px',
                }}
              >
                {marketData.map((data, index) => {
                  const total = data.tam + data.sam + data.som;
                  const barHeightPercentage = (total / maxValue) * 100;
                  const tamPercentage = (data.tam / total) * 100;
                  const samPercentage = (data.sam / total) * 100;
                  const somPercentage = (data.som / total) * 100;

                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center"
                      style={{
                        width: '220px',
                      }}
                    >
                      {/* Bar Container */}
                      <div 
                        className="w-full relative rounded-lg overflow-hidden"
                        style={{
                          height: '420px',
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
                          />
                          
                          {/* SAM - Green */}
                          <div 
                            className="w-full relative transition-all duration-1000 ease-out"
                            style={{
                              height: `${samPercentage}%`,
                              backgroundColor: '#10B981',
                              opacity: isVisible ? 1 : 0,
                              transitionDelay: `${index * 100 + 400}ms`,
                            }}
                          />
                          
                          {/* SOM - Orange */}
                          <div 
                            className="w-full relative rounded-t-lg transition-all duration-1000 ease-out"
                            style={{
                              height: `${somPercentage}%`,
                              backgroundColor: '#F59E0B',
                              opacity: isVisible ? 1 : 0,
                              transitionDelay: `${index * 100 + 600}ms`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Vertical Labels - Outside Grid Below */}
              <div 
                className="flex items-start"
                style={{
                  marginLeft: '50px',
                  marginTop: '20px',
                  gap: '60px',
                }}
              >
                {marketData.map((data, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center"
                    style={{
                      width: '220px',
                    }}
                  >
                    <p 
                      className="text-white text-center transition-all duration-1000"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '25px',
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
                fontSize: '18px',
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
              className="flex gap-8 justify-start items-center transition-all duration-1000"
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
                    fontSize: '35px',
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
                    fontSize: '35px',
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
                    fontSize: '35px',
                    fontWeight: 500,
                  }}
                >
                  SOM (U.S.)
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Comments */}
          <div 
            className="flex flex-col justify-center transition-all duration-1000"
            style={{
              width: '600px',
              paddingLeft: '40px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transitionDelay: '1400ms',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(255, 202, 43, 0.3)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#FFCA2B',
                  marginBottom: '24px',
                  letterSpacing: '0.01em',
                }}
              >
                Sales Cycle Notes
              </h3>

              <div className="space-y-6">
                {/* Insurance */}
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                    }}
                  >
                    Insurance
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '160%',
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    Dependent on POC resources extends - Sales cycles to 6-18 months.
                  </p>
                </div>

                {/* Government */}
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                    }}
                  >
                    Government
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '160%',
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    Lengthy RFP/Q processes and slow to adopt - Sales cycles of 12-24 months.
                  </p>
                </div>

                {/* Mobility */}
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                    }}
                  >
                    Mobility
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '160%',
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    Fast moving, Tech Enabled, ICP is Data Scientist - Sales cycles are measured in weeks. Huge budgets for data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamSlide;