'use client';

import React, { useState } from 'react';
import TitleSlide from '@/Slides/title';
import ProblemSlide from '@/Slides/problem';
import CrashDetectionSlide from '@/Slides/crashdetection';
import BreadthOfImpactSlide from '@/Slides/breadthofimpact';
import MachineLearningSlide from '@/Slides/machinelearning';
import LatencySlide from '@/Slides/latency';
import AlertNavigationSlide from '@/Slides/alertnavigation';
import WernersEdgeSlide from '@/Slides/wernersedge';
import PilotDeploymentSlide from '@/Slides/pilotdeployment';
import ContactSlide from '@/Slides/contact';

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <TitleSlide key="title" onNext={() => setCurrentSlide(1)} onPrevious={() => setCurrentSlide(0)} />,
    <ProblemSlide key="problem" onNext={() => setCurrentSlide(2)} onPrevious={() => setCurrentSlide(0)} />,
    <CrashDetectionSlide key="crash" onNext={() => setCurrentSlide(3)} onPrevious={() => setCurrentSlide(1)} />,
    <BreadthOfImpactSlide key="breadth" onNext={() => setCurrentSlide(4)} onPrevious={() => setCurrentSlide(2)} />,
    <MachineLearningSlide key="machine-learning" onNext={() => setCurrentSlide(5)} onPrevious={() => setCurrentSlide(3)} />,
    <LatencySlide key="latency" onNext={() => setCurrentSlide(6)} onPrevious={() => setCurrentSlide(4)} />,
    <AlertNavigationSlide key="alert-nav" onNext={() => setCurrentSlide(7)} onPrevious={() => setCurrentSlide(5)} />,
    <WernersEdgeSlide key="werners-edge" onNext={() => setCurrentSlide(8)} onPrevious={() => setCurrentSlide(6)} />,
    <PilotDeploymentSlide key="pilot-deployment" onNext={() => setCurrentSlide(9)} onPrevious={() => setCurrentSlide(7)} />,
    <ContactSlide key="contact" onNext={() => setCurrentSlide(9)} onPrevious={() => setCurrentSlide(8)} />,
  ];

  return (
    <div className="w-full h-screen overflow-hidden">
      {slides[currentSlide]}
    </div>
  );
};

export default SlideShow;