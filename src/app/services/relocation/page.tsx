import FreeConsultaion from "@/features/relocation/FreeConsultation";
import HeroSection from "@/features/relocation/HeroSection";
import PopularCities from "@/features/relocation/PopularCities";
import RelocationSupport from "@/features/relocation/RelocationSupport";
import Testimonials from "@/features/relocation/Testimonials";
import React from "react";

const Relocation = () => {
  return (
    <div>
      <HeroSection />
      <RelocationSupport />
      <Testimonials />
      <PopularCities />
      <FreeConsultaion />
    </div>
  );
};

export default Relocation;
