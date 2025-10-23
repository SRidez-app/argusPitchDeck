'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Brain, Zap, Rocket, DollarSign, Target } from 'lucide-react';

interface TimelineSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TimelineSlide: React.FC<TimelineSlideProps> = ({ onNext, onPrevious }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const phases = [
    {
      quarter: 'Q1 2025',
      title: 'Lost in the Noise',
      emotion: 'The Struggle',
      story: "We had conversations with dozens of potential customers. Everyone had problems, but we weren't sure which one to solve. Traffic data? Insurance claims? City management? The path forward felt unclear.",
      image: '/stuck.jpg',
      imageAlt: 'Feeling stuck and uncertain',
      icon: <Brain size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'Customer discovery with insurance companies',
        'Traffic management research',
        'Multiple AI model experiments',
        'Searching for product-market fit',
      ],
      color: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    {
      quarter: 'Q2 2025',
      title: 'The Lyft Breakthrough',
      emotion: 'Eureka Moment',
      story: "Then came the pivotal Lyft insurance meeting. In one conversation, everything crystallized: detect accidents and notify 911 BEFORE calls or cars even stop. We found our true IP, our differentiation, our PURPOSE. Suddenly, I felt like Einstein—all the pieces aligned.",
      image: '/idea.jpg',
      imageAlt: 'Eureka moment - the breakthrough',
      icon: <Zap size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        '💡 Lyft Insurance Meeting - The Breakthrough',
        'True IP & differentiation identified',
        'Real-time accident detection vision',
        'Save lives by notifying 911 instantly',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.5)',
      highlight: true,
    },
    {
      quarter: 'Q2 2025',
      title: 'Building the Foundation',
      emotion: 'Getting to Work',
      story: "With clarity came action. We dove deep into AI model development, building the most advanced tagging and detection system. Iterations, retraining, optimization—we reduced costs by 80% while improving accuracy. The team went full-time in June. This was no longer an experiment. This was our mission.",
      image: null,
      icon: <Rocket size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        '🧠 Advanced AI model development (Passive)',
        '🔄 Tagging iterations & retraining cycles',
        '💰 Achieved 80% cost reduction',
        '🚀 Team went full-time (June)',
        '📱 Application development commenced',
      ],
      color: 'rgba(255, 202, 43, 0.12)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
    },
    {
      quarter: 'Q3 2025',
      title: 'Momentum & Validation',
      emotion: 'Proof of Concept',
      story: "We closed our pre-seed round—$350K. Investors believed in the vision. We started V2 with real-time detection, optimized our NVIDIA streaming pipeline, and built our Traffic API. Marketing to DOTs and Smart Cities began. On September 20th, we transitioned to Product-Led Growth. The market was ready. We were ready.",
      image: null,
      icon: <DollarSign size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        '💵 Pre-Seed Round Closed: $350K (Late July)',
        '⚡ V2 Launch: Argus AI (Real-Time Detection)',
        '🎯 NVIDIA Pipeline Cost Optimizations',
        '🔌 Traffic API Development',
        '📢 DOT/Smart City Marketing (Sept 15)',
        '🎯 PLG Transition (Sept 20)',
      ],
      color: 'rgba(255, 202, 43, 0.12)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
    },
    {
      quarter: 'Q4 2025',
      title: 'The Future Unfolds',
      emotion: 'What\'s Next',
      story: "Now we're building the features that will define the future of traffic intelligence: congestion forecasting, wrong-way driving detection, pedestrians on highways, and full DOT integrations. We're not just detecting incidents—we're preventing them. We're saving lives. This is just the beginning.",
      image: null,
      icon: <Target size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        '📊 Traffic Congestion Forecasting',
        '🚨 DOT Features Launch',
        '⚠️ Wrong-Way Driving Detection',
        '🚶 Pedestrians on Highway Detection',
        '🌐 Smart City Partnerships Expansion',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.6)',
      highlight: true,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        if (currentPhase < phases.length - 1) {
          setCurrentPhase(prev => prev + 1);
        } else if (onNext) {
          onNext();
        }
      } else if (event.key === 'ArrowLeft') {
        if (currentPhase > 0) {
          setCurrentPhase(prev => prev - 1);
        } else if (onPrevious) {
          onPrevious();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPhase, onNext, onPrevious, phases.length]);

  const currentContent = phases[currentPhase];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden timeline-slide"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Global Styles - SINGLE BLOCK */}
      <style jsx global>{`
        .timeline-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .timeline-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .timeline-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 202, 43, 0.3);
          border-radius: 4px;
        }
        .timeline-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 202, 43, 0.5);
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

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

      {/* Progress Indicator */}
      <div
        className="fixed top-8 right-8 flex items-center gap-2 z-50"
        style={{
          fontFamily: 'Inter, var(--font-inter)',
          fontSize: '14px',
          color: '#FFFFFF',
          opacity: 0.8,
        }}
      >
        <span>{currentPhase + 1} / {phases.length}</span>
        <div style={{ display: 'flex', gap: '6px' }}>
          {phases.map((_, index) => (
            <div
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: index === currentPhase ? '#FFCA2B' : 'rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full h-full flex flex-col items-start justify-start px-12 pt-8 pb-12 overflow-y-auto timeline-scroll"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 202, 43, 0.3) transparent',
        }}
      >
        {/* Title Section - Only show on first phase */}
        {currentPhase === 0 && (
          <div 
            className="mb-12 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            }}
          >
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
                OUR JOURNEY
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
              From <span style={{ color: '#FFCA2B' }}>Confusion</span> to <span style={{ color: '#FFCA2B' }}>Clarity</span>
            </h1>
          </div>
        )}

        {/* Main Content - Animated Phase */}
        <div 
          className="w-full flex-1 transition-all duration-700"
          style={{
            opacity: 1,
            transform: 'translateX(0)',
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: currentContent.color,
              border: `3px solid ${currentContent.borderColor}`,
              borderRadius: 'clamp(16px, 1.5vw, 24px)',
              padding: 'clamp(32px, 4vh, 56px)',
              display: 'flex',
              flexDirection: currentContent.image ? 'row' : 'column',
              gap: 'clamp(32px, 4vw, 56px)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: currentContent.highlight 
                ? '0 0 40px rgba(255, 202, 43, 0.3)' 
                : 'none',
            }}
          >
            {/* Image Section (if present) */}
            {currentContent.image && (
              <div
                className="transition-all duration-700"
                style={{
                  flex: '0 0 clamp(250px, 30vw, 400px)',
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  opacity: 1,
                  transform: 'scale(1)',
                  animation: 'fadeInScale 0.7s ease-out',
                }}
              >
                <Image
                  src={currentContent.image}
                  alt={currentContent.imageAlt}
                  width={400}
                  height={400}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                />
              </div>
            )}

            {/* Text Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vh, 36px)' }}>
              {/* Header */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: 'clamp(64px, 6vw, 80px)',
                      height: 'clamp(64px, 6vw, 80px)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid rgba(255, 202, 43, 0.3)',
                    }}
                  >
                    {currentContent.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Inter, var(--font-inter)',
                        fontSize: 'clamp(16px, 1.5vw, 22px)',
                        fontWeight: 600,
                        color: '#FFCA2B',
                        letterSpacing: '0.05em',
                        marginBottom: '4px',
                      }}
                    >
                      {currentContent.quarter}
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Tobias',
                        fontSize: 'clamp(32px, 3.5vw, 56px)',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        lineHeight: '1.2',
                      }}
                    >
                      {currentContent.title}
                    </h2>
                    <div
                      style={{
                        fontFamily: 'Apercu Pro',
                        fontSize: 'clamp(14px, 1.2vw, 18px)',
                        fontWeight: 600,
                        color: 'rgba(255, 202, 43, 0.8)',
                        fontStyle: 'italic',
                        marginTop: '8px',
                      }}
                    >
                      {currentContent.emotion}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story */}
              <p
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(18px, 1.5vw, 26px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: '1.7',
                  opacity: 0.95,
                }}
              >
                {currentContent.story}
              </p>

              {/* Milestones */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(10px, 1vh, 14px)',
                  marginTop: 'auto',
                }}
              >
                {currentContent.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="transition-all duration-500"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      opacity: 1,
                      transform: 'translateX(0)',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      style={{
                        minWidth: '6px',
                        minHeight: '6px',
                        maxWidth: '6px',
                        maxHeight: '6px',
                        background: '#FFCA2B',
                        borderRadius: '50%',
                        marginTop: '10px',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'Apercu Pro',
                        fontSize: 'clamp(15px, 1.2vw, 20px)',
                        fontWeight: milestone.includes('💡') || milestone.includes('💵') || milestone.includes('🚀') 
                          ? 700 
                          : 500,
                        color: milestone.includes('💡') || milestone.includes('💵') || milestone.includes('🚀')
                          ? '#FFCA2B'
                          : 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.5',
                      }}
                    >
                      {milestone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div
          className="mt-6 text-center w-full"
          style={{
            fontFamily: 'Apercu Pro',
            fontSize: 'clamp(14px, 1.1vw, 16px)',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic',
          }}
        >
          {currentPhase < phases.length - 1 
            ? '→ Press arrow key to continue the journey' 
            : '→ Press arrow key to move to next slide'}
        </div>
      </div>
    </div>
  );
};

export default TimelineSlide;