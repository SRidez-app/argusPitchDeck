'use client';

import React, { useState } from 'react';
import TitleSlide from '@/Slides/title';
import ProblemSlide from '@/Slides/problem';
import BreadthOfImpactSlide from '@/Slides/breadthofimpact';
import CrashDetectionSlide from '@/Slides/crashdetection';
import TamSlide from '@/Slides/tam';
import TimelineSlide from '@/Slides/timeline';
import CompetitorsSlide from '@/Slides/competitors';
import RevenueSlide from '@/Slides/revenue';
import UnitEconomicsSlide from '@/Slides/uniteconomics';
import TeamOverviewSlide from '@/Slides/teamoverview';
import TheAskSlide from '@/Slides/theask';
import ContactUsSlide from '@/Slides/contactus';

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <TitleSlide 
      key="title" 
      onNext={() => setCurrentSlide(1)} 
      onPrevious={() => setCurrentSlide(0)} 
    />,
    <ProblemSlide 
      key="problem" 
      onNext={() => setCurrentSlide(2)} 
      onPrevious={() => setCurrentSlide(0)} 
    />,
    <BreadthOfImpactSlide 
      key="breadth" 
      onNext={() => setCurrentSlide(3)} 
      onPrevious={() => setCurrentSlide(1)} 
    />,
    <CrashDetectionSlide 
      key="crash" 
      onNext={() => setCurrentSlide(4)} 
      onPrevious={() => setCurrentSlide(2)} 
    />,
    <TamSlide 
      key="tam" 
      onNext={() => setCurrentSlide(5)} 
      onPrevious={() => setCurrentSlide(3)} 
    />,
    <TimelineSlide 
      key="timeline" 
      onNext={() => setCurrentSlide(6)} 
      onPrevious={() => setCurrentSlide(4)} 
    />,
    <CompetitorsSlide 
      key="competitors" 
      onNext={() => setCurrentSlide(7)} 
      onPrevious={() => setCurrentSlide(5)} 
    />,
    <RevenueSlide 
      key="revenue" 
      onNext={() => setCurrentSlide(8)} 
      onPrevious={() => setCurrentSlide(6)} 
    />,
    <UnitEconomicsSlide 
      key="unit-economics" 
      onNext={() => setCurrentSlide(9)} 
      onPrevious={() => setCurrentSlide(7)} 
    />,
    <TeamOverviewSlide 
      key="team-overview" 
      onNext={() => setCurrentSlide(10)} 
      onPrevious={() => setCurrentSlide(8)} 
    />,
    <TheAskSlide 
      key="the-ask" 
      onNext={() => setCurrentSlide(11)} 
      onPrevious={() => setCurrentSlide(9)} 
    />,
    <ContactUsSlide 
      key="contact-us" 
      onNext={() => setCurrentSlide(11)} 
      onPrevious={() => setCurrentSlide(10)} 
    />,
  ];

  return (
    <div className="w-full h-screen overflow-hidden">
      {slides[currentSlide]}
    </div>
  );
};

export default SlideShow;