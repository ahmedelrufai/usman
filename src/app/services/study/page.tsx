import HeroSection from "@/features/study/HeroSection";
import StudyAbroad from "@/features/study/StudyAbroad";
import StudyCities from "@/features/study/StudyCities";
import StudySupport from "@/features/study/StudySupport";
import Testimonials from "@/features/study/Testimonials";
import React from "react";

const Study = () => {
  return (
    <div>
      <HeroSection />
      <StudyAbroad />
      <StudyCities />
      <StudySupport />
      <Testimonials />
    </div>
  );
};

export default Study;
