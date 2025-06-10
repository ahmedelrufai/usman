"use client";

import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { redirectToWhatsApp } from "@/helper";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center px-4"
      >
        <div className="flex flex-col max-w-[900px] items-center gap-8">
          <SecondaryButton label="How It Works" variant="secondary" />
          <Title>About Arjun</Title>
          <p className="text-sm sm:text-xl font-light text-center text-secondary-black">
            Your trusted partner for comprehensive cross-border solutions,
            empowering mobility and unlocking global opportunities across Africa
            and beyond.
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
