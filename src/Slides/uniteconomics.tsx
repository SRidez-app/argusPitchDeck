'use client';

import React, { useEffect, useState } from 'react';

interface UnitEconomicsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const UnitEconomicsSlide: React.FC<UnitEconomicsSlideProps> = ({ onNext, onPrevious }) => {
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

  const yearData = [
    {
      year: 'Year 1',
      period: 'Current',
      totalRevenue: 640000,
      breakdown: [
        { label: 'COGS', value: 150000, color: '#808080' },
        { label: 'Government', value: 0, color: '#B8860B' },
        { label: 'Insurance', value: 140000, color: '#DAA520' },
        { label: 'Mobility', value: 500000, color: '#FFD700' },
      ],
    },
    {
      year: 'Year 2',
      period: '2025 (E)',
      totalRevenue: 21400000,
      breakdown: [
        { label: 'COGS', value: 200000, color: '#808080' },
        { label: 'Government', value: 500000, color: '#B8860B' },
        { label: 'Insurance', value: 700000, color: '#DAA520' },
        { label: 'Mobility', value: 20000000, color: '#FFD700' },
      ],
    },
    {
      year: 'Year 4',
      period: '2027 (E)',
      totalRevenue: 55950000,
      breakdown: [
        { label: 'COGS', value: 250000, color: '#808080' },
        { label: 'Government', value: 1500000, color: '#B8860B' },
        { label: 'Insurance', value: 4200000, color: '#DAA520' },
        { label: 'Mobility', value: 50000000, color: '#FFD700' },
      ],
    },
  ];

  // Calculate percentages and gross profit
  const processedData = yearData.map(year => {
    const cogs = year.breakdown[0].value;
    const revenue = year.totalRevenue - cogs;
    const grossProfit = revenue - cogs;
    const grossProfitPercent = ((grossProfit / revenue) * 100).toFixed(0);
    
    const breakdownWithPercent = year.breakdown.map(item => ({
      ...item,
      percentage: ((item.value / year.totalRevenue) * 100).toFixed(1),
    }));

    return {
      ...year,
      breakdownWithPercent,
      grossProfitPercent,
      revenue,
    };
  });

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
        7
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
              FINANCIAL PROJECTIONS
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
            Revenue Breakdown{' '}
            <span style={{ color: '#FFCA2B' }}>& Margins</span>
          </h1>
        </div>

        {/* Margin Boxes */}
        <div 
          className="flex gap-12 justify-center w-full transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
            flexWrap: 'wrap',
          }}
        >
          {processedData.map((yearItem, index) => {
            const revenueSegments = yearItem.breakdownWithPercent.filter(item => item.label !== 'COGS');
            const cogsItem = yearItem.breakdownWithPercent.find(item => item.label === 'COGS');

            return (
              <div 
                key={index}
                className="flex flex-col transition-all duration-1000"
                style={{
                  width: 'clamp(300px, 20vw, 380px)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                  transitionDelay: `${index * 150 + 400}ms`,
                }}
              >
                {/* Gross Profit Percentage Header */}
                <div
                  className="text-center mb-3"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(18px, 1.3vw, 24px)',
                    fontWeight: 700,
                    color: '#FFCA2B',
                  }}
                >
                  {yearItem.grossProfitPercent}% Gross Margin
                </div>

                {/* Main Box */}
                <div
                  style={{
                    border: '2px solid rgba(164, 179, 255, 0.3)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Revenue Box Profit - Top Section */}
                  <div
                    style={{
                      backgroundColor: '#10B981',
                      padding: 'clamp(16px, 1.5vw, 24px)',
                      textAlign: 'center',
                      borderBottom: '2px solid rgba(164, 179, 255, 0.3)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 'clamp(20px, 1.6vw, 28px)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '4px',
                      }}
                    >
                      ${(yearItem.revenue / 1000000).toFixed(1)}M
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: 'clamp(13px, 0.9vw, 16px)',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        opacity: 0.9,
                      }}
                    >
                      Revenue
                    </div>
                  </div>

                  {/* Revenue Segments */}
                  <div style={{ padding: '0' }}>
                    {revenueSegments.map((segment, segIndex) => {
                      if (segment.value === 0) return null;
                      
                      return (
                        <div
                          key={segIndex}
                          style={{
                            padding: 'clamp(14px, 1vw, 18px) clamp(16px, 1.5vw, 24px)',
                            borderBottom: segIndex < revenueSegments.length - 1 ? '1px solid rgba(164, 179, 255, 0.2)' : 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                              style={{
                                width: 'clamp(12px, 0.9vw, 16px)',
                                height: 'clamp(12px, 0.9vw, 16px)',
                                borderRadius: '3px',
                                backgroundColor: segment.color,
                              }}
                            />
                            <span
                              style={{
                                fontFamily: 'var(--font-inter)',
                                fontSize: 'clamp(13px, 0.9vw, 16px)',
                                fontWeight: 500,
                                color: '#FFFFFF',
                              }}
                            >
                              {segment.label}
                            </span>
                          </div>
                          <span
                            style={{
                              fontFamily: 'var(--font-inter)',
                              fontSize: 'clamp(13px, 0.9vw, 16px)',
                              fontWeight: 600,
                              color: '#FFFFFF',
                            }}
                          >
                            ${(segment.value / 1000).toFixed(0)}K
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* COGS Section - Gray */}
                  {cogsItem && (
                    <div
                      style={{
                        backgroundColor: cogsItem.color,
                        padding: 'clamp(16px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)',
                        borderTop: '2px solid rgba(164, 179, 255, 0.3)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: 'clamp(13px, 0.9vw, 16px)',
                            fontWeight: 600,
                            color: '#FFFFFF',
                          }}
                        >
                          COGS
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: 'clamp(13px, 0.9vw, 16px)',
                            fontWeight: 600,
                            color: '#FFFFFF',
                          }}
                        >
                          ${(cogsItem.value / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Year Labels */}
                <div className="text-center mt-6">
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(18px, 1.2vw, 22px)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '4px',
                    }}
                  >
                    {yearItem.year}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(13px, 0.9vw, 16px)',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {yearItem.period}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div
          className="text-center w-full mt-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: '1200ms',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(12px, 0.8vw, 14px)',
              color: 'rgba(255, 255, 255, 0.5)',
              fontStyle: 'italic',
            }}
          >
            COGS = Cost of Goods Sold | (E) = Estimated
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnitEconomicsSlide;