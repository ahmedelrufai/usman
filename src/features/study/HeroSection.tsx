"use client";

import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="aspect-[1000/500] max-sm:aspect-[1000/800] relative overflow-hidden w-full z-0">
        <Image
          src="/images/car-rentals/hero.png"
          alt="Hero"
          fill
          className="object-cover max-md:hidden"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 z-10 flex flex-col items-center px-4"
      >
        <div className="flex flex-col max-w-[900px] items-center gap-8">
          <SecondaryButton label="Study Services" variant="secondary" />
          <Title>Your Study Abroad Journey Starts Here.</Title>
          <p className="text-sm sm:text-xl font-light text-center text-secondary-black">
            We make studying abroad simple, stress-free, and exciting guiding
            you from application to arrival.
          </p>
          <Button label="Talk to an Agent" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
