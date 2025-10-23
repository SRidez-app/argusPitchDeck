'use client';

import React, { useEffect, useState } from 'react';
import { AlertCircle, Camera, Phone, Users, Clock, XCircle, AlertTriangle } from 'lucide-react';

interface TheImpactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const TheImpactSlide: React.FC<TheImpactSlideProps> = ({ onNext, onPrevious }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Auto-advance through the story
  useEffect(() => {
    if (currentStep < 8) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 3500); // 3.5 seconds per step

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        if (currentStep < 8) {
          setCurrentStep(prev => prev + 1);
        } else if (onNext) {
          onNext();
        }
      } else if (event.key === 'ArrowLeft') {
        if (currentStep > 0) {
          setCurrentStep(prev => prev - 1);
        } else if (onPrevious) {
          onPrevious();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, onNext, onPrevious]);

  const storySteps = [
    {
      time: '2:47 PM',
      title: 'Traffic Builds',
      description: 'Congestion starts on Highway 101. No one notices.',
      icon: <AlertTriangle size={48} color="#FFCA2B" strokeWidth={2.5} />,
      visual: 'traffic',
      color: 'rgba(255, 202, 43, 0.1)',
      pulse: false,
    },
    {
      time: '2:49 PM',
      title: '1000s of Cameras, Zero Eyes',
      description: 'A crash occurs. Traffic operators monitor thousands of feeds manually.',
      icon: <Camera size={48} color="#DC3545" strokeWidth={2.5} />,
      visual: 'cameras',
      color: 'rgba(220, 53, 69, 0.15)',
      pulse: false,
    },
    {
      time: '2:50 PM',
      title: 'No One Sees It',
      description: 'The accident goes undetected. Critical minutes pass.',
      icon: <XCircle size={48} color="#DC3545" strokeWidth={2.5} />,
      visual: 'undetected',
      color: 'rgba(220, 53, 69, 0.2)',
      pulse: true,
    },
    {
      time: '2:53 PM',
      title: 'Delayed 911 Response',
      description: 'No automatic alert. Someone finally calls 911... 3 minutes later.',
      icon: <Phone size={48} color="#DC3545" strokeWidth={2.5} />,
      visual: 'delay',
      color: 'rgba(220, 53, 69, 0.25)',
      pulse: true,
    },
    {
      time: '2:55 PM',
      title: 'ITS Unaware',
      description: 'Traffic management has no data. No alerts sent to drivers.',
      icon: <AlertCircle size={48} color="#DC3545" strokeWidth={2.5} />,
      visual: 'its',
      color: 'rgba(220, 53, 69, 0.3)',
      pulse: true,
    },
    {
      time: '3:02 PM',
      title: 'Traffic Piles Up',
      description: 'Alerts delayed by cell latency. Drivers stuck. Congestion spreads.',
      icon: <Clock size={48} color="#DC3545" strokeWidth={2.5} />,
      visual: 'congestion',
      color: 'rgba(220, 53, 69, 0.35)',
      pulse: false,
    },
    {
      time: '3:15 PM',
      title: 'A Life Lost',
      description: 'The delayed response proves fatal. A preventable tragedy.',
      icon: <Users size={48} color="#FFFFFF" strokeWidth={2.5} />,
      visual: 'tragedy',
      color: 'rgba(0, 0, 0, 0.8)',
      pulse: false,
    },
    {
      time: 'Days Later',
      title: 'Disputed Fault - No Justice',
      description: 'No footage. Insurance disputes fault. The family receives nothing.',
      icon: <XCircle size={48} color="#FFFFFF" strokeWidth={2.5} />,
      visual: 'injustice',
      color: 'rgba(0, 0, 0, 0.9)',
      pulse: false,
    },
  ];

  const currentStoryStep = storySteps[currentStep] || storySteps[0];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse-red {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .pulse-animation {
          animation: pulse-red 2s ease-in-out infinite;
        }
        .fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
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
        3
      </div>

      {/* Progress Dots */}
      <div
        className="fixed flex flex-col gap-2 z-50"
        style={{
          top: 'clamp(20px, 2.5vh, 32px)',
          right: 'clamp(20px, 2.5vw, 32px)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      >
        {storySteps.map((_, index) => (
          <div
            key={index}
            style={{
              width: 'clamp(10px, 1vw, 12px)',
              height: 'clamp(10px, 1vw, 12px)',
              borderRadius: '50%',
              background: index === currentStep 
                ? '#FFCA2B' 
                : index < currentStep 
                  ? 'rgba(220, 53, 69, 0.6)' 
                  : 'rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              border: index === currentStep ? '2px solid #FFFFFF' : 'none',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center"
        style={{
          padding: 'clamp(24px, 3vh, 80px) clamp(24px, 3vw, 120px)',
        }}
      >
        {/* Title Section - Only show on first step */}
        {currentStep === 0 && (
          <div 
            className="absolute fade-in-up"
            style={{
              top: 'clamp(32px, 4vh, 64px)',
              left: 'clamp(24px, 3vw, 48px)',
              opacity: isVisible ? 1 : 0,
              maxWidth: 'clamp(300px, 50vw, 800px)',
            }}
          >
            <div
              style={{
                width: 'fit-content',
                paddingTop: 'clamp(6px, 0.8vh, 8px)',
                paddingBottom: 'clamp(6px, 0.8vh, 8px)',
                marginBottom: 'clamp(16px, 2vh, 24px)',
              }}
            >
              <h2 
                className="text-white"
                style={{
                  fontFamily: 'Inter, var(--font-inter)',
                  fontWeight: 600,
                  fontSize: 'clamp(20px, 1.8vw, 36px)',
                  lineHeight: '1.2',
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                THE REALITY TODAY
              </h2>
              <div 
                style={{
                  borderBottom: '3px solid #FFCA2B',
                  width: '100%',
                  marginTop: 'clamp(6px, 0.8vh, 8px)',
                }}
              />
            </div>
            
            <h1 
              style={{
                fontFamily: 'Tobias',
                fontWeight: 500,
                fontSize: 'clamp(32px, 4vw, 72px)',
                lineHeight: '1.1',
                letterSpacing: '0px',
                color: '#FFFFFF',
              }}
            >
              A Preventable <span style={{ color: '#DC3545' }}>Tragedy</span>
            </h1>
          </div>
        )}

        {/* Central Story Card */}
        <div
          className="fade-in-up"
          key={currentStep}
          style={{
            maxWidth: currentStep === 0 
              ? 'clamp(500px, 65vw, 1000px)'  // Smaller for first step
              : 'clamp(600px, 80vw, 1200px)',  // Normal size for rest
            width: '100%',
            background: currentStoryStep.color,
            border: currentStep >= 2 
              ? '3px solid rgba(220, 53, 69, 0.6)' 
              : '3px solid rgba(255, 202, 43, 0.3)',
            borderRadius: 'clamp(16px, 1.5vw, 32px)',
            padding: 'clamp(32px, 4vh, 80px) clamp(24px, 3vw, 80px)',
            boxShadow: currentStep >= 2
              ? '0 20px 60px rgba(220, 53, 69, 0.4)'
              : '0 20px 60px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            overflow: 'hidden',
            marginTop: currentStep === 0 ? 'clamp(100px, 15vh, 200px)' : '0', // Push first step down
          }}
        >
          {/* Pulse effect for critical moments */}
          {currentStoryStep.pulse && (
            <div
              className="pulse-animation"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle, rgba(220, 53, 69, 0.3) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Time Badge */}
          <div
            style={{
              display: 'inline-block',
              background: currentStep >= 6 ? '#FFFFFF' : '#FFCA2B',
              color: currentStep >= 6 ? '#000000' : '#000000',
              padding: 'clamp(6px, 0.8vh, 12px) clamp(16px, 1.5vw, 32px)',
              borderRadius: 'clamp(6px, 0.8vw, 12px)',
              fontFamily: 'Inter, var(--font-inter)',
              fontSize: 'clamp(14px, 1.2vw, 24px)',
              fontWeight: 700,
              marginBottom: 'clamp(20px, 2.5vh, 40px)',
              letterSpacing: '0.05em',
            }}
          >
            {currentStoryStep.time}
          </div>

          {/* Icon */}
          <div
            style={{
              width: 'clamp(60px, 6vw, 120px)',
              height: 'clamp(60px, 6vw, 120px)',
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'clamp(24px, 3vh, 48px)',
              border: currentStep >= 2 
                ? '3px solid rgba(220, 53, 69, 0.5)' 
                : '3px solid rgba(255, 202, 43, 0.3)',
            }}
          >
            <div style={{ 
              transform: 'scale(clamp(0.7, 1, 1.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {currentStoryStep.icon}
            </div>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'Tobias',
              fontSize: 'clamp(28px, 3.5vw, 64px)',
              fontWeight: 500,
              color: currentStep >= 2 ? '#DC3545' : '#FFCA2B',
              lineHeight: '1.2',
              marginBottom: 'clamp(16px, 2vh, 32px)',
              textShadow: currentStep >= 6 ? '0 2px 8px rgba(0, 0, 0, 0.5)' : 'none',
            }}
          >
            {currentStoryStep.title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Apercu Pro',
              fontSize: 'clamp(16px, 1.6vw, 32px)',
              fontWeight: 400,
              color: currentStep >= 6 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              maxWidth: '100%',
            }}
          >
            {currentStoryStep.description}
          </p>

          {/* Final Impact Statement */}
          {currentStep === 7 && (
            <div
              className="fade-in-up"
              style={{
                marginTop: 'clamp(32px, 4vh, 64px)',
                padding: 'clamp(20px, 2.5vh, 40px)',
                background: 'rgba(220, 53, 69, 0.2)',
                borderLeft: '4px solid #DC3545',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Apercu Pro',
                  fontSize: 'clamp(15px, 1.5vw, 28px)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: '1.5',
                  fontStyle: 'italic',
                }}
              >
                "In spite of someone else hitting them, they won't see justice. The system failed at every step."
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA - Show on last step */}
        {currentStep === 7 && (
          <div
            className="fade-in-up"
            style={{
              marginTop: 'clamp(32px, 4vh, 80px)',
              textAlign: 'center',
              maxWidth: 'clamp(400px, 70vw, 1000px)',
            }}
          >
            <p
              style={{
                fontFamily: 'Tobias',
                fontSize: 'clamp(24px, 2.5vw, 48px)',
                fontWeight: 500,
                color: '#FFCA2B',
                lineHeight: '1.3',
              }}
            >
              This happens every day.
              <br />
              <span style={{ color: '#FFFFFF' }}>ARGUS AI changes everything.</span>
            </p>
          </div>
        )}

        {/* Navigation hint */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(16px, 2vh, 40px)',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Apercu Pro',
            fontSize: 'clamp(12px, 1vw, 16px)',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          {currentStep < 7 
            ? '→ Press arrow key to advance or wait for auto-play' 
            : '→ Press arrow key to continue'}
        </div>
      </div>
    </div>
  );
};

export default TheImpactSlide;