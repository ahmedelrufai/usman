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
          src="/images/logistics/hero.png"
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
          <SecondaryButton label="Logistics" variant="secondary" />
          <Title>Reliable, Fast & Affordable Logistics Handled with Care</Title>
          <p className="text-sm sm:text-xl font-light text-center text-secondary-black">
            At Arjun Global Services, we understand that in today’s fast-moving
            world, logistics is more than just moving goods it's about
            precision, reliability, and peace of mind. Whether you're a business
            shipping goods across borders or an individual sending a package
            locally, we've got you covered.
          </p>
          <Button
            label="Talk to an Agent"
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
