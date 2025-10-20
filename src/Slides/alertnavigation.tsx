'use client';

import React, { useState, useEffect } from 'react';
import { AlertTriangle, Navigation, CheckCircle, XCircle } from 'lucide-react';

interface AlertNavigationSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const AlertNavigationSlide: React.FC<AlertNavigationSlideProps> = ({ onNext, onPrevious }) => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
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
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setTime(t => (t >= 45 ? 0 : t + 0.1));
    }, 100);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  // Animation timing
  const accidentAppears = time >= 2;
  const argusAlert = time >= 2.8 && time < 14;
  const withArgusReroute = time >= 3.5;
  const withArgusArrived = time >= 18;
  
  const withoutArgusNearAccident = time >= 10;
  const withoutArgusHitsTraffic = time >= 12;
  const manualReportDelay = time >= 14 && time < 20;
  const withoutArgusStuck = time >= 16;
  const tooLateAlert = time >= 20 && time < 28;
  
  // Accurate car positions following polylines
  const getCarPosition = (hasArgus: boolean) => {
    if (hasArgus) {
      // Original path: (80,280) -> (80,200) - straight up
      if (time < 4) {
        const progress = time / 4;
        return { 
          top: `${70 - progress * 20}%`, 
          left: '20%',
          rotation: -90 // facing up
        };
      }
      // After reroute: (80,200) -> (80,120) -> (120,120) - up then right
      if (time < 8) {
        const progress = (time - 4) / 4;
        return { 
          top: `${50 - progress * 20}%`, 
          left: '20%',
          rotation: -90 // still facing up
        };
      }
      // Turn right corner
      if (time < 10) {
        const progress = (time - 8) / 2;
        return { 
          top: '30%', 
          left: `${20 + progress * 10}%`,
          rotation: 0 // facing right
        };
      }
      // Straight to destination (120,120) -> (320,120)
      if (time < 20) {
        const progress = (time - 10) / 10;
        return { 
          top: '30%', 
          left: `${30 + progress * 50}%`,
          rotation: 0 // facing right
        };
      }
      return { top: '30%', left: '80%', rotation: 0 };
    } else {
      // Without Argus: (80,280) -> (80,200) then stops before accident
      if (time < 12) {
        const progress = Math.min(time / 12, 1);
        return { 
          top: `${70 - progress * 20}%`, 
          left: '20%',
          rotation: -90 // facing up
        };
      }
      // Stuck at 50% (just before accident at 200,200)
      return { top: '50%', left: '20%', rotation: -90 };
    }
  };

  const withArgusPos = getCarPosition(true);
  const withoutArgusPos = getCarPosition(false);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Page Number */}
      <div 
        className="absolute bottom-8 right-8 text-white z-50"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 400,
          opacity: 0.6,
        }}
      >
        7
      </div>

      {/* Header */}
      <div 
        className="absolute top-0 left-0 right-0 z-10 px-12 pt-8"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)',
        }}
      >
        <h2 
          className="text-white mb-3"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '0.02em',
            borderBottom: '3px solid #FFCA2B',
            paddingBottom: '6px',
            display: 'inline-block',
          }}
        >
          THE ARGUS ADVANTAGE
        </h2>
        <h1 
          className="text-white mt-6 mb-4"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '120%',
            letterSpacing: '-0.01em',
          }}
        >
          Speed of Intelligence: <span style={{ color: '#FFCA2B' }}>8 Seconds</span> vs <span style={{ color: '#EF4444' }}>Minutes</span>
        </h1>
      </div>
      
      {/* Split Screen Container */}
      <div className="absolute inset-0 flex pt-44">
        {/* Left Side - WITH ARGUS */}
        <div className="flex-1 relative" style={{ borderRight: '2px solid rgba(255, 255, 255, 0.1)' }}>
          <div 
            className="absolute top-6 left-6 px-5 py-3 rounded-lg font-bold text-lg z-20"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              border: '2px solid #10B981',
              color: '#10B981',
              fontFamily: 'var(--font-inter)',
            }}
          >
            ✓ WITH ARGUS AI
          </div>
          
          {/* Map Background */}
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid)" />
            
            {/* Original Route (grayed out after reroute) */}
            <path 
              d="M 60 280 L 60 200" 
              stroke={withArgusReroute ? "rgba(59, 130, 246, 0.3)" : "#3B82F6"} 
              strokeWidth="6" 
              fill="none"
              strokeDasharray={withArgusReroute ? "8,4" : "none"}
            />
            
            {/* New Route (appears after alert) */}
            {withArgusReroute && (
              <>
                <path 
                  d="M 60 200 L 60 120 L 120 120 L 320 120" 
                  stroke="#10B981" 
                  strokeWidth="6" 
                  fill="none"
                />
                {/* Animated pulse on new route */}
                <path 
                  d="M 60 200 L 60 120 L 120 120 L 320 120" 
                  stroke="#FFCA2B" 
                  strokeWidth="8" 
                  fill="none"
                  opacity="0.4"
                  className="animate-pulse"
                />
              </>
            )}
            
            {/* Accident Icon */}
            {accidentAppears && (
              <g transform="translate(200, 200)">
                <circle cx="0" cy="0" r="25" fill="#EF4444" opacity="0.3" className="animate-ping" />
                <circle cx="0" cy="0" r="18" fill="#EF4444" />
                <text x="0" y="6" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">⚠</text>
              </g>
            )}
            
            {/* Destination */}
            <g transform="translate(320, 120)">
              <circle cx="0" cy="0" r="16" fill="#10B981" />
              <circle cx="0" cy="0" r="12" fill="white" opacity="0.3" className="animate-ping" />
              <text x="0" y="5" textAnchor="middle" fill="white" fontSize="16">📍</text>
            </g>
          </svg>
          
          {/* Car Icon - WITH ARGUS */}
          <div 
            className="absolute transition-all duration-1000 ease-linear z-10"
            style={{
              top: withArgusPos.top,
              left: withArgusPos.left,
              transform: `translate(-50%, -50%) rotate(${withArgusPos.rotation}deg) scaleX(-1)`,
            }}
          >
            <div className="relative">
              <div className="text-5xl drop-shadow-lg">🚗</div>
              {withArgusReroute && !withArgusArrived && (
                <div 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-green-500 text-white px-3 py-1 rounded text-xs font-bold"
                  style={{ fontFamily: 'var(--font-inter)', transform: 'scaleX(-1)' }}
                >
                  Rerouted ✓
                </div>
              )}
            </div>
          </div>
          
          {/* Argus Alert - Positioned away from car path */}
          {argusAlert && (
            <div 
              className="absolute bg-black border-2 p-5 rounded-xl shadow-2xl z-30"
              style={{
                top: '15%',
                right: '8%',
                maxWidth: '280px',
                borderColor: '#FFCA2B',
                fontFamily: 'var(--font-inter)',
                animation: 'slideInRight 0.5s ease-out',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-7 h-7" style={{ color: '#FFCA2B' }} />
                <div className="font-bold text-lg" style={{ color: '#FFCA2B' }}>ARGUS AI ALERT</div>
              </div>
              <div className="text-white text-base font-semibold mb-2">🚨 Accident detected ahead</div>
              <div className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                📹 DOT Camera Detection
              </div>
              <div className="text-xs mb-3 px-3 py-1.5 rounded inline-block" style={{ backgroundColor: '#10B981', color: 'white' }}>
                Detected in 8 seconds
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2">
                <span>🔄</span>
                <span>Rerouting now...</span>
              </div>
            </div>
          )}
          
          {/* Arrival Status */}
          {withArgusArrived && (
            <div 
              className="absolute bottom-24 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-xl font-bold text-xl flex items-center gap-3 z-30"
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.95)',
                color: 'white',
                fontFamily: 'var(--font-inter)',
                border: '2px solid #10B981',
              }}
            >
              <CheckCircle className="w-7 h-7" />
              Arrived On Time!
            </div>
          )}
          
          {/* Stats Box */}
          <div 
            className="absolute bottom-6 left-6 p-5 rounded-xl z-20"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '2px solid #10B981',
              fontFamily: 'var(--font-inter)',
            }}
          >
            <div className="text-sm font-bold mb-3" style={{ color: '#10B981' }}>✓ WITH ARGUS AI</div>
            <div className="text-xs text-white space-y-1.5">
              <div>⚡ Detection: <span className="font-bold text-green-400">8 seconds</span></div>
              <div>📹 Source: <span className="font-bold">DOT Camera AI</span></div>
              <div>🔄 Rerouted: <span className="font-bold text-green-400">Automatically</span></div>
              <div className="pt-1 mt-1 border-t border-green-900">
                <span className="font-bold text-green-400 text-sm">⏰ Delay: 0 minutes</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - WITHOUT ARGUS */}
        <div className="flex-1 relative">
          <div 
            className="absolute top-6 left-6 px-5 py-3 rounded-lg font-bold text-lg z-20"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '2px solid #EF4444',
              color: '#EF4444',
              fontFamily: 'var(--font-inter)',
            }}
          >
            ✗ WITHOUT ARGUS AI
          </div>
          
          {/* Map Background */}
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            <rect width="400" height="400" fill="url(#grid)" />
            
            {/* Original Route */}
            <path 
              d="M 60 280 L 60 200" 
              stroke="#3B82F6" 
              strokeWidth="6" 
              fill="none"
            />
            
            {/* Extended route ahead - showing where car would go if not stuck */}
            <path 
              d="M 60 200 L 200 200" 
              stroke="rgba(59, 130, 246, 0.3)" 
              strokeWidth="6" 
              fill="none"
              strokeDasharray="8,4"
            />
            
            {/* Congestion Zone */}
            {withoutArgusHitsTraffic && (
              <>
                <circle cx="60" cy="200" r="50" fill="#EF4444" opacity="0.2" className="animate-pulse" />
                <circle cx="60" cy="200" r="35" fill="#DC2626" opacity="0.3" className="animate-pulse" />
              </>
            )}
            
            {/* Accident Icon */}
            {accidentAppears && (
              <g transform="translate(200, 200)">
                <circle cx="0" cy="0" r="25" fill="#EF4444" opacity="0.3" className="animate-ping" />
                <circle cx="0" cy="0" r="18" fill="#EF4444" />
                <text x="0" y="6" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">⚠</text>
              </g>
            )}
            
            {/* Destination */}
            <g transform="translate(320, 120)">
              <circle cx="0" cy="0" r="16" fill="#10B981" />
              <text x="0" y="5" textAnchor="middle" fill="white" fontSize="16">📍</text>
            </g>
          </svg>
          
          {/* Car Icon - WITHOUT ARGUS */}
          <div 
            className="absolute transition-all duration-1000 ease-linear z-10"
            style={{
              top: withoutArgusPos.top,
              left: withoutArgusPos.left,
              transform: `translate(-50%, -50%) rotate(${withoutArgusPos.rotation}deg) scaleX(-1)`,
            }}
          >
            <div className="relative">
              <div className="text-5xl drop-shadow-lg">🚗</div>
              {withoutArgusStuck && (
                <div 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-red-500 text-white px-3 py-1 rounded text-xs font-bold animate-pulse"
                  style={{ fontFamily: 'var(--font-inter)', transform: 'scaleX(-1)' }}
                >
                  STUCK!
                </div>
              )}
            </div>
          </div>
          
          {/* No Alert - Initial state */}
          {withoutArgusNearAccident && !withoutArgusHitsTraffic && (
            <div 
              className="absolute bg-black border-2 border-blue-500 p-5 rounded-xl shadow-2xl z-30"
              style={{
                top: '15%',
                left: '8%',
                maxWidth: '280px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Navigation className="w-6 h-6 text-blue-400" />
                <div className="font-bold text-base text-blue-400">Navigation App</div>
              </div>
              <div className="text-white text-sm mb-1">Following route...</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>No incident alerts</div>
            </div>
          )}
          
          {/* Traffic detected */}
          {withoutArgusHitsTraffic && !manualReportDelay && (
            <div 
              className="absolute bg-black border-2 border-orange-500 p-5 rounded-xl shadow-2xl z-30"
              style={{
                top: '15%',
                left: '8%',
                maxWidth: '280px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Navigation className="w-6 h-6 text-orange-400" />
                <div className="font-bold text-base text-orange-400">Navigation App</div>
              </div>
              <div className="text-white text-sm mb-1">⚠️ Slowdown detected...</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Analyzing GPS data</div>
            </div>
          )}
          
          {/* Manual report */}
          {manualReportDelay && !withoutArgusStuck && (
            <div 
              className="absolute bg-black border-2 p-5 rounded-xl shadow-2xl z-30 animate-pulse"
              style={{
                top: '15%',
                left: '8%',
                maxWidth: '280px',
                borderColor: '#FFCA2B',
                fontFamily: 'var(--font-inter)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-6 h-6" style={{ color: '#FFCA2B' }} />
                <div className="font-bold text-base" style={{ color: '#FFCA2B' }}>Waze Report</div>
              </div>
              <div className="text-white text-sm mb-1">📱 Driver reporting...</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Waiting for confirmation</div>
            </div>
          )}
          
          {/* Stuck state */}
          {withoutArgusStuck && !tooLateAlert && (
            <div 
              className="absolute bg-black border-2 border-red-500 p-5 rounded-xl shadow-2xl z-30"
              style={{
                top: '60%',
                left: '50%',
                transform: 'translateX(-50%)',
                maxWidth: '300px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <XCircle className="w-7 h-7 text-red-500" />
                <div className="font-bold text-xl text-red-500">STUCK IN TRAFFIC</div>
              </div>
              <div className="text-white text-base mb-2">🚗🚗🚗 Heavy congestion</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Already in the jam...</div>
            </div>
          )}
          
          {/* Too late alert */}
          {tooLateAlert && (
            <div 
              className="absolute bg-black border-2 border-red-600 p-5 rounded-xl shadow-2xl z-30"
              style={{
                top: '15%',
                left: '8%',
                maxWidth: '280px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Navigation className="w-6 h-6 text-red-400" />
                <div className="font-bold text-base text-red-400">Alert Received</div>
              </div>
              <div className="text-white text-sm mb-2">⚠️ "Accident ahead"</div>
              <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>From crowdsourced reports</div>
              <div className="text-xs bg-red-900 px-3 py-2 rounded text-red-200">
                Too late - already stuck
              </div>
            </div>
          )}
          
          {/* Stats Box */}
          <div 
            className="absolute bottom-6 left-6 p-5 rounded-xl z-20"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '2px solid #EF4444',
              fontFamily: 'var(--font-inter)',
            }}
          >
            <div className="text-sm font-bold mb-3" style={{ color: '#EF4444' }}>✗ WITHOUT ARGUS AI</div>
            <div className="text-xs text-white space-y-1.5">
              <div>⏱️ Detection: <span className="font-bold text-red-400">Manual only</span></div>
              <div>📱 Source: <span className="font-bold">Crowdsourced</span></div>
              <div>🚗 Rerouted: <span className="font-bold text-red-400">Too late</span></div>
              <div className="pt-1 mt-1 border-t border-red-900">
                <span className="font-bold text-red-400 text-sm">⏰ Delay: 15-20+ min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Control Bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center gap-4 z-40"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontFamily: 'var(--font-inter)',
        }}
      >
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="px-6 py-2.5 rounded-lg font-semibold transition-all"
          style={{
            backgroundColor: '#3B82F6',
            color: 'white',
          }}
        >
          {isPaused ? '▶️ Play' : '⏸️ Pause'}
        </button>
        <button 
          onClick={() => setTime(0)}
          className="px-6 py-2.5 rounded-lg font-semibold transition-all"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
          }}
        >
          🔄 Restart
        </button>
        <div 
          className="px-5 py-2.5 rounded-lg font-mono font-semibold"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#FFCA2B',
          }}
        >
          {Math.floor(time)}s / 45s
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AlertNavigationSlide;