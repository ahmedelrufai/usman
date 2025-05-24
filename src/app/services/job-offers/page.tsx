import HeroSection from "@/features/JobOffers/HeroSection";
import HowItWorks from "@/features/JobOffers/HowItWorks";
import JobDestination from "@/features/JobOffers/JobDestination";
import Testimonials from "@/features/JobOffers/Testimonials";
import WhatWeOffer from "@/features/JobOffers/WhatWeOffer";
import WhyUs from "@/features/JobOffers/WhyUs";
import React from "react";

const JobOffers = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeOffer />
      <WhyUs />
      <JobDestination />
      <Testimonials />
      <HowItWorks />
    </div>
  );
};

export default JobOffers;
