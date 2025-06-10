"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Title from "@/components/ui/Title";
import { redirectToWhatsApp } from "@/helper";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7] to-blue-200 md:to-blue-300 pointer-events-none opaciy-45" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col max-w-[900px] items-center mx-auto gap-8 sm:mt-15"
      >
        <SecondaryButton label="Real Estate Services" variant="secondary" />
        <Title>
          Find Your Ideal Property Home or Investment, We've Got You Covered.
        </Title>
        <p className="text-sm sm:text-xl font-light text-center text-secondary-black">
          Whether you're looking to rent, buy, or invest, ARJUN GLOBAL SERVICES
          offers reliable real estate support tailored to your needs. From local
          apartments to overseas opportunities, our experienced agents help you
          every step of the way transparently and affordably
        </p>
        <Button
          label="Get Personalised Assistance"
          onClick={() => {
            redirectToWhatsApp();
          }}
        />
      </motion.div>

      {/* Image positioned 100px higher to overlap with content */}
      <div className="aspect-[1200/500] relative overflow-hidden w-full -mt-[100px] z-0">
        <Image
          src="/images/real-estate/hero.png"
          alt="Hero"
          fill
          className="object-cover"
        />
        {/* Additional gradient overlay on the image for better blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7]/30 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;
