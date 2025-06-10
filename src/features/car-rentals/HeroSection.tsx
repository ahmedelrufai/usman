"use client";

import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { redirectToWhatsApp } from "@/helper";
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
          <SecondaryButton label="Car Rentals" variant="secondary" />
          <Title>Reliable Rides, Wherever You're Headed.</Title>
          <p className="text-sm sm:text-xl font-light text-center text-secondary-black">
            Need a ride that fits your trip and your budget? We offer a wide
            range of well maintained vehicles ready when you are. Whether it's
            for a business meeting, airport transfer, road trip, or daily
            commute, we've got the keys to your convenience.
          </p>
          <Button
            label="Get Personalised Assistance"
            onClick={() => {
              redirectToWhatsApp();
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
