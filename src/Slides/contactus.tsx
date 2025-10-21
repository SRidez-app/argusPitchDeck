'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ContactUsSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const ContactUsSlide: React.FC<ContactUsSlideProps> = ({ onNext, onPrevious }) => {
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

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

  // Generate fireworks
  useEffect(() => {
    const generateFireworks = () => {
      const newFireworks = [];
      for (let i = 0; i < 8; i++) {
        newFireworks.push({
          id: i,
          x: Math.random() * 100,
          y: 20 + Math.random() * 40,
          delay: i * 800,
        });
      }
      setFireworks(newFireworks);
    };

    const timer = setTimeout(generateFireworks, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: '#000000',
      }}
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3,
          }}
        >
          <source src="/accidentdetection.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(107.56deg, rgba(0, 0, 0, 0.85) 37.5%, rgba(20, 0, 76, 0.85) 100%)',
          }}
        />
      </div>

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
        17
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
        <div className="relative w-full h-full flex flex-col items-center justify-center px-12">
          {/* Logo */}
          <div 
            className="mb-12 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transitionDelay: '200ms',
            }}
          >
            <Image
              src="/whitelogo.png"
              alt="Argus Logo"
              width={300}
              height={300}
              style={{ width: '300px', height: 'auto' }}
              priority
            />
          </div>

          {/* Thank You Message */}
          <div 
            className="text-center mb-16 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms',
            }}
          >
            <h1 
              style={{
                fontFamily: 'Tobias',
                fontWeight: 500,
                fontSize: '96px',
                lineHeight: '110%',
                letterSpacing: '0px',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              Thank You
            </h1>
            <p
              style={{
                fontFamily: 'Apercu Pro',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '140%',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              Together, we're making roads safer and cities smarter
            </p>
          </div>

          {/* Divider Line */}
          <div 
            className="transition-all duration-1000"
            style={{
              width: '600px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #FFCA2B, transparent)',
              marginBottom: '48px',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '600ms',
            }}
          />

          {/* Contact Section */}
          <div 
            className="text-center transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '800ms',
            }}
          >
            <h2
              style={{
                fontFamily: 'Inter, var(--font-inter)',
                fontWeight: 600,
                fontSize: '28px',
                lineHeight: '140%',
                letterSpacing: '0.02em',
                color: '#FFCA2B',
                marginBottom: '32px',
              }}
            >
              LET'S CONNECT
            </h2>

            {/* Contact Cards Grid */}
            <div 
              className="flex gap-8 justify-center"
              style={{
                maxWidth: '1200px',
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(255, 202, 43, 0.3)',
                  borderRadius: '16px',
                  padding: '32px 40px',
                  minWidth: '280px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:contact@argusai.com"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFCA2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  contact@argusai.com
                </a>
              </div>

              {/* Phone Card */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(255, 202, 43, 0.3)',
                  borderRadius: '16px',
                  padding: '32px 40px',
                  minWidth: '280px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Phone
                </div>
                <a
                  href="tel:+15551234567"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFCA2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  (555) 123-4567
                </a>
              </div>

              {/* Website Card */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(255, 202, 43, 0.3)',
                  borderRadius: '16px',
                  padding: '32px 40px',
                  minWidth: '280px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, var(--font-inter)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Website
                </div>
                <a
                  href="https://argusai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Apercu Pro',
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFCA2B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  argusai.com
                </a>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div 
            className="text-center mt-16 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: '1000ms',
            }}
          >
            <p
              style={{
                fontFamily: 'Tobias',
                fontSize: '36px',
                fontWeight: 500,
                color: '#FFCA2B',
                letterSpacing: '0.02em',
              }}
            >
              Smart Cities Start With Vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSlide;