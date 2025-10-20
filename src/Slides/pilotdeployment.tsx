import React, { useEffect } from 'react';

interface PilotDeploymentSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const PilotDeploymentSlide: React.FC<PilotDeploymentSlideProps> = ({ onNext, onPrevious }) => {
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

  const cards = [
    {
      title: "ARGUS AI's API",
      description: "Push notifications are sent to PS ecosystem and would use their SDK to reroute"
    },
    {
      title: "WERNER",
      description: "Configure routing experience, manage data feeds and priorization."
    },
    {
      title: "QUICK DEPLOYMENT",
      description: "Fast integration due to PS partner ecosystem and Werner's routing engine."
    }
  ];

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
        9
      </div>

      {/* Content Container */}
      <div className="relative min-h-full flex flex-col items-start justify-start px-12 pt-8 pb-12">
        {/* Title Section */}
        <div 
          className="mb-10"
          style={{
            display: 'flex',
            paddingTop: '8px',
            alignItems: 'flex-end',
            gap: '10px',
            borderBottom: '3px solid #FFCA2B',
          }}
        >
          <h2 
            className="text-white"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: 'normal',
              letterSpacing: '0.72px',
              paddingBottom: '6px',
            }}
          >
            POTENTIAL PILOT DEPLOYMENT
          </h2>
        </div>

        {/* Main Heading */}
        <div className="mb-12 w-full">
          <h1 
            style={{
              fontFamily: 'Tobias',
              fontWeight: 500,
              fontSize: '64px',
              lineHeight: 'normal',
              color: '#FFF',
            }}
          >
            Platform Science's Partnership Ecosystem
          </h1>
        </div>

        {/* Cards Container */}
        <div 
          className="flex justify-center items-stretch w-full"
          style={{
            gap: '40px',
            maxWidth: '1700px',
          }}
        >
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-between"
              style={{
                width: '542px',
                height: '505px',
                padding: '60px 24px 60px 24px',
                borderRadius: '12px',
                border: '1px solid #CFD7FF',
                background: 'linear-gradient(260deg, rgba(255, 202, 43, 0.60) 0%, rgba(153, 121, 26, 0.60) 100%)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', flex: 1, justifyContent: 'center' }}>
                {/* Card Title */}
                <h3 
                  style={{
                    alignSelf: 'stretch',
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Apercu Pro',
                    fontSize: '38px',
                    fontWeight: 500,
                    lineHeight: '110%',
                    letterSpacing: '1.9px',
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p 
                  style={{
                    alignSelf: 'stretch',
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Apercu Pro',
                    fontSize: '36px',
                    fontWeight: 500,
                    lineHeight: '110%',
                    letterSpacing: '1.8px',
                  }}
                >
                  {card.description}
                </p>
              </div>

              {/* Gold Underline */}
              <div 
                style={{
                  width: '214px',
                  height: '3px',
                  background: '#FFA800',
                  marginTop: '48px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PilotDeploymentSlide;