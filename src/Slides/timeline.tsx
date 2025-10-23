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
      title: 'Searching in the Dark',
      emotion: 'The Grind Before the Breakthrough',
      story: "Every founder knows this moment. Dozens of customer conversations. Everyone has problems. Insurance claims, traffic analysis, city management—which one would change the world? We were drowning in possibilities, starving for direction. The right answer was inches away, but invisible.",
      image: '/stuck.jpg',
      imageAlt: 'The uncertainty before clarity',
      imageCaption: 'Every breakthrough starts here',
      icon: <Brain size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'Deep customer discovery with insurance companies',
        'Traffic management system research',
        'Extensive AI model experimentation',
        'The uncomfortable search for product-market fit',
      ],
      color: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    {
      quarter: 'Q2 2025',
      title: 'The Lyft Breakthrough',
      emotion: 'From Passive Detection to Real-Time Intelligence',
      story: "The struggle was real. Dozens of insurance customer conversations revealed a painful truth: passive AI model detection wasn't enough. Implementation resources were limited, and customers only wanted data for disputed claims—after the damage was done. Then came the Lyft Insurance Meeting. Everything changed. REAL-TIME. INSTANT DETECTION. Our true IP and value crystallized: traffic alerting is a massive data market. We could save lives by notifying 911 instantly—not hours or days later, but in the critical seconds that matter most.",
      image: '/idea.jpg',
      imageAlt: 'The breakthrough moment',
      imageCaption: 'When everything aligned',
      icon: <Zap size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'Dozens of insurance customers: passive detection had limited appeal',
        'The limitation: only wanted data for disputed claims after the fact',
        'The Lyft Meeting: identified real-time instant detection as true IP',
        'The breakthrough: traffic alerting as a massive life-saving market',
        'New mission: notify 911 instantly, save lives in real-time',
      ],
      color: 'rgba(255, 202, 43, 0.15)',
      borderColor: 'rgba(255, 202, 43, 0.5)',
      highlight: true,
    },
    {
      quarter: 'Q2-Q3 2025',
      title: 'Execution Mode',
      emotion: 'Vision to Reality',
      story: "Clarity ignites speed. We built the most advanced traffic tagging and detection system on the market. Countless iterations, relentless optimization—80% cost reduction while improving accuracy. The team went full-time in June. This stopped being a project. This became our obsession, our mission, our reason for existing.",
      image: null,
      icon: <Rocket size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'Advanced AI model development (passive detection)',
        'Continuous tagging iterations and retraining cycles',
        'Achieved 80% infrastructure cost reduction',
        'Team commitment: full-time as of June 2025',
        'Production application development launched',
      ],
      color: 'rgba(255, 202, 43, 0.12)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
    },
    {
      quarter: 'Q3 2025',
      title: 'Momentum Becomes Inevitability',
      emotion: 'Validation',
      story: "The market responded. Pre-seed closed at $350K—investors saw what we saw. V2 shipped with real-time detection. NVIDIA pipeline optimized. Traffic API live. DOTs and Smart Cities started calling us. September 20th: Product-Led Growth activated. The company transformed from building to scaling. From hoping to knowing.",
      image: null,
      icon: <DollarSign size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'Pre-Seed Round Closed: $350K (Late July)',
        'V2 Launch: Argus AI with real-time detection',
        'NVIDIA streaming pipeline cost optimizations',
        'Traffic API production release',
        'DOT and Smart City marketing campaign (Sept 15)',
        'Product-Led Growth transition (Sept 20)',
      ],
      color: 'rgba(255, 202, 43, 0.12)',
      borderColor: 'rgba(255, 202, 43, 0.4)',
    },
    {
      quarter: 'Q4 2025',
      title: 'The Future We\'re Building',
      emotion: 'What Comes Next',
      story: "Now we're building the infrastructure that will define traffic intelligence for the next decade: predictive congestion modeling, wrong-way driving alerts, pedestrian detection on highways, full DOT integration. We're not reacting to accidents anymore—we're preventing them. Every feature is a life saved. Every integration is a city made safer. This is just the beginning.",
      image: null,
      icon: <Target size={40} color="#FFCA2B" strokeWidth={2.5} />,
      milestones: [
        'Predictive traffic congestion forecasting',
        'DOT integration suite launch',
        'Wrong-way driving detection system',
        'Highway pedestrian detection capabilities',
        'Smart City partnership program expansion',
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
      {/* Global Styles */}
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
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 40px rgba(255, 202, 43, 0.3);
          }
          50% {
            box-shadow: 0 0 60px rgba(255, 202, 43, 0.5);
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
        {/* Title Section - Enhanced for first phase */}
        {currentPhase === 0 && (
          <div 
            className="mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div
              style={{
                fontFamily: 'Apercu Pro',
                fontSize: 'clamp(16px, 1.2vw, 20px)',
                fontWeight: 600,
                color: '#FFCA2B',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Our Journey
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
              The Moment <span style={{ color: '#FFCA2B' }}>Everything</span> Changed
            </h1>
            <p
              style={{
                fontFamily: 'Apercu Pro',
                fontSize: 'clamp(18px, 1.4vw, 24px)',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '20px',
                maxWidth: '900px',
                lineHeight: '1.6',
              }}
            >
              From searching for a problem to solving one that saves lives
            </p>
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
              animation: currentContent.highlight ? 'pulseGlow 3s ease-in-out infinite' : 'none',
            }}
          >
            {/* Enhanced Image Section with Caption */}
            {currentContent.image && (
              <div
                className="transition-all duration-700"
                style={{
                  flex: '0 0 clamp(280px, 35vw, 450px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    flex: 1,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    opacity: 1,
                    transform: 'scale(1)',
                    animation: 'fadeInScale 0.7s ease-out',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <Image
                    src={currentContent.image}
                    alt={currentContent.imageAlt}
                    width={450}
                    height={450}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                  {/* Vignette overlay for drama */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.5) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
                {currentContent.imageCaption && (
                  <div
                    style={{
                      fontFamily: 'Apercu Pro',
                      fontSize: 'clamp(13px, 1vw, 16px)',
                      fontWeight: 500,
                      color: 'rgba(255, 202, 43, 0.9)',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      padding: '0 8px',
                    }}
                  >
                    {currentContent.imageCaption}
                  </div>
                )}
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

              {/* Story - Enhanced typography */}
              <p
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(18px, 1.5vw, 26px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: '1.75',
                  opacity: 0.98,
                }}
              >
                {currentContent.story}
              </p>

              {/* Milestones - Clean bullet points */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(10px, 1vh, 14px)',
                  marginTop: 'auto',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255, 202, 43, 0.2)',
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
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.9)',
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