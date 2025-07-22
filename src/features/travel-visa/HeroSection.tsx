"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const router = useRouter();

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Container>
      <motion.div
        className="flex flex-col lg:flex-row sm:mt-16 mt-8 gap-8 lg:gap-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content Section */}
        <div className="flex-1 lg:pr-8">
          <div className="text-center lg:text-left">
            <motion.span
              className="text-blue text-sm bg-[#E7E9E9] px-5 py-3 rounded-full inline-block"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              Travel & Visa Services
            </motion.span>
          </div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-[1.1] mt-6 lg:mt-8 max-sm:text-center"
            variants={itemVariants}
          >
            We make{" "}
            <motion.span
              className="italic text-blue inline-block"
              whileHover={{
                scale: 1.05,
                rotate: -1,
                transition: { duration: 0.3 },
              }}
            >
              Travel Easy
            </motion.span>{" "}
            Visas, Bookings, and Beyond
          </motion.h1>

          <motion.div
            className="mt-6 lg:mt-7 flex flex-col sm:flex-row gap-4 transition-all duration-700"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <Button
                label="Get a Free Consultation"
                onClick={() =>
                  window.open(
                    "https://forms.zohopublic.com/arjunglobal/form/ExpertConsultation/formperma/jSoQBm4p_6txtYEWvrVPWWRigXfzvzEM6Ba7cLtDONk",
                    "_blank"
                  )
                }
                hideOnMobile={false}
                className="sm:w-auto max-sm:mx-auto"
              />
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="secondary"
                label="Explore Services"
                onClick={() => router.push("/#our-services")}
                hideOnMobile={false}
                className="sm:w-auto max-sm:mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content Section */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          variants={itemVariants}
        >
          <p className="font-light text-lg sm:text-xl text-secondary-black text-center lg:text-left max-w-[475px] mt-4 lg:mt-[50px] px-4 lg:px-0">
            Planning a trip shouldn't feel overwhelming. Whether you're
            traveling for work, school, or adventure, our team is here to guide
            you through the entire process—from finding the right visa to
            booking your flight.
          </p>
        </motion.div>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        className="w-full relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/6.5] rounded-2xl lg:rounded-3xl overflow-hidden mt-8 lg:mt-14"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
      >
        <Image
          src="/images/travel-and-visa/hero.png"
          alt="hero"
          fill
          className="object-cover"
        />

        {/* Floating elements - hidden on mobile for cleaner look */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 lg:w-3 lg:h-3 bg-blue rounded-full opacity-60 hidden sm:block"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full opacity-70 hidden sm:block"
          animate={{
            y: [0, -8, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </Container>
  );
};

export default HeroSection;
