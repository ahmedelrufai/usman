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
          <SecondaryButton label="Ticketing" variant="secondary" />
          <Title>Booking Made Simple, Travel Made Easy.</Title>
          <p className="text-sm sm:text-xl font-light text-center text-secondary-black">
            Whether you're flying across the world or attending an event, we’ll
            help you find the best deals with zero hassle. Let us handle the
            booking so you can focus on the journey ahead.
          </p>
          <Button label="Get Personalised Assistance" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
