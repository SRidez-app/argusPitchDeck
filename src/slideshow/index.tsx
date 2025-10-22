'use client';

import React, { useState } from 'react';
import TitleSlide from '@/Slides/title';
import ProblemSlide from '@/Slides/problem';
import CrashDetectionSlide from '@/Slides/crashdetection';
import BreadthOfImpactSlide from '@/Slides/breadthofimpact';
import TamSlide from '@/Slides/tam';
import CompetitorsSlide from '@/Slides/competitors';
import UnitEconomicsSlide from '@/Slides/uniteconomics';
import TractionSlide from '@/Slides/traction';
import RevenueSlide from '@/Slides/revenue';
import TeamOverviewSlide from '@/Slides/teamoverview';
import TeamAccomplishmentsSlide from '@/Slides/teamaccomplishments';
import TheAskSlide from '@/Slides/theask';
import ContactUsSlide from '@/Slides/contactus';

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <TitleSlide key="title" onNext={() => setCurrentSlide(1)} onPrevious={() => setCurrentSlide(0)} />,
    <ProblemSlide key="problem" onNext={() => setCurrentSlide(2)} onPrevious={() => setCurrentSlide(0)} />,
    <CrashDetectionSlide key="crash" onNext={() => setCurrentSlide(3)} onPrevious={() => setCurrentSlide(1)} />,
    <BreadthOfImpactSlide key="breadth" onNext={() => setCurrentSlide(4)} onPrevious={() => setCurrentSlide(2)} />,
    <TamSlide key="tam" onNext={() => setCurrentSlide(5)} onPrevious={() => setCurrentSlide(3)} />,
    <CompetitorsSlide key="competitors" onNext={() => setCurrentSlide(6)} onPrevious={() => setCurrentSlide(4)} />,
    <UnitEconomicsSlide key="unit-economics" onNext={() => setCurrentSlide(7)} onPrevious={() => setCurrentSlide(5)} />,
    <TractionSlide key="traction" onNext={() => setCurrentSlide(8)} onPrevious={() => setCurrentSlide(6)} />,
    <RevenueSlide key="revenue" onNext={() => setCurrentSlide(9)} onPrevious={() => setCurrentSlide(7)} />,
    <TeamOverviewSlide key="team-overview" onNext={() => setCurrentSlide(10)} onPrevious={() => setCurrentSlide(8)} />,
    <TeamAccomplishmentsSlide key="team-accomplishments" onNext={() => setCurrentSlide(11)} onPrevious={() => setCurrentSlide(9)} />,
    <TheAskSlide key="the-ask" onNext={() => setCurrentSlide(12)} onPrevious={() => setCurrentSlide(10)} />,
    <ContactUsSlide key="contact-us" onNext={() => setCurrentSlide(12)} onPrevious={() => setCurrentSlide(11)} />,
  ];

  return (
    <div className="w-full h-screen overflow-hidden">
      {slides[currentSlide]}
    </div>
  );
};

export default SlideShow;