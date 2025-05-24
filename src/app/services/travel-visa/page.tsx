import HeroSection from "@/features/travel-visa/HeroSection";
import HowItWorks from "@/features/travel-visa/HowItWorks";
import Testimonials from "@/features/travel-visa/Testimonials";
import VisaPlan from "@/features/travel-visa/VisaPlan";
import VisaType from "@/features/travel-visa/VisaType";
import WhyUs from "@/features/travel-visa/WhyUs";
import { NextPage } from "next";
import React from "react";

const TravelVisa: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <VisaType />
      <HowItWorks />
      <Testimonials />
      <WhyUs />
      <VisaPlan />
    </div>
  );
};

export default TravelVisa;
