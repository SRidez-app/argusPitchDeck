'use client';

import React, { useState } from 'react';
import TitleSlide from '@/Slides/title';
import ProblemSlide from '@/Slides/problem';
import CrashDetectionSlide from '@/Slides/crashdetection';
import BreadthOfImpactSlide from '@/Slides/breadthofimpact';
import TamSlide from '@/Slides/tam';
import CompetitorsSlide from '@/Slides/competitors';

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <TitleSlide key="title" onNext={() => setCurrentSlide(1)} onPrevious={() => setCurrentSlide(0)} />,
    <ProblemSlide key="problem" onNext={() => setCurrentSlide(2)} onPrevious={() => setCurrentSlide(0)} />,
    <CrashDetectionSlide key="crash" onNext={() => setCurrentSlide(3)} onPrevious={() => setCurrentSlide(1)} />,
    <BreadthOfImpactSlide key="breadth" onNext={() => setCurrentSlide(4)} onPrevious={() => setCurrentSlide(2)} />,
    <TamSlide key="tam" onNext={() => setCurrentSlide(5)} onPrevious={() => setCurrentSlide(3)} />,
    <CompetitorsSlide key="competitors" onNext={() => setCurrentSlide(6)} onPrevious={() => setCurrentSlide(4)} />,
    // Add more slides here
  ];

  return (
    <div className="w-full h-screen">
      {slides[currentSlide]}
    </div>
  );
};

export default SlideShow;