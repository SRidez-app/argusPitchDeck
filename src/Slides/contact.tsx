import React, { useEffect } from 'react';

interface ContactSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const ContactSlide: React.FC<ContactSlideProps> = ({ onNext, onPrevious }) => {
  useEffect(() => {
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

  return (
    <div 
      className="relative w-full h-screen overflow-auto"
      style={{
        background: 'linear-gradient(107.56deg, #000000 37.5%, #14004C 100%)',
      }}
    >
      {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white z-10"
        style={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        10
      </div>

      {/* Content Container */}
      <div 
        className="relative min-h-full flex flex-col items-start justify-start px-12 pt-8 pb-12"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '90px 0',
        }}
      >
        {/* Main Container with backdrop blur */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '1920px',
            height: '900px',
            padding: '40px 120px 80px 120px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '40px',
            background: 'rgba(0, 0, 0, 0.40)',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(15px)',
          }}
        >
          {/* Title Section */}
          <div>
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: 'normal',
                letterSpacing: '0.72px',
                borderBottom: '3px solid #FFCA2B',
                paddingBottom: '6px',
                display: 'inline-block',
              }}
            >
              CONTACT
            </h2>
          </div>

          {/* Contact Card */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: '1596px',
              padding: '48px 32px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '48px',
              borderRadius: '12px',
              border: '1px solid #FFCA2B',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(108deg, #000 37.5%, #14004C 100%)',
              boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Name */}
            <h1
              style={{
                alignSelf: 'stretch',
                color: '#FFCA2B',
                textAlign: 'center',
                fontFamily: 'Tobias',
                fontSize: '96px',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '0px',
              }}
            >
              Robert Putt
            </h1>

            {/* Title */}
            <p
              style={{
                alignSelf: 'stretch',
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Apercu Pro',
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 'normal',
                letterSpacing: '0.96px',
              }}
            >
              CEO, Argus AI
            </p>

            {/* Email */}
            <p
              style={{
                alignSelf: 'stretch',
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Apercu Pro',
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 'normal',
                letterSpacing: '0.96px',
              }}
            >
              robert@getargus.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSlide;