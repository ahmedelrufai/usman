"use client";

import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

const StudySupport: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Container animation for overall entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  // Image animation
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Content section animation
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  // Individual item animations
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Step animation with number counter
  const stepVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  // Floating animation for step numbers
  const floatingVariants = {
    animate: {
      y: [0, -4, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container>
      <motion.div
        ref={ref}
        className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full md:mt-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="order-1 lg:order-2 space-y-8  mx-auto flex flex-col items-center"
          variants={contentVariants}
        >
          {/* Main heading */}
          <motion.h1
            className="text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[40px] font-medium text-primary-black leading-tight text-center lg:text-left"
            variants={itemVariants}
          >
            Our Full Study Support Package
          </motion.h1>

          {/* Steps */}
          <motion.div
            className="space-y-6 max-w-[575px]"
            variants={itemVariants}
          >
            {/* Step 1 */}
            <motion.div
              className="flex items-center space-x-4 rounded-2xl p-2"
              variants={stepVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 bg-[#FFA70420] rounded-full flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
              >
                <span className="text-[#FFA704] font-light text-lg">1</span>
              </motion.div>
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Course & Country Guidance
                </h3>
                <p className="text-secondary-black font-light">
                  We help you choose the perfect course, institution, and
                  destination based on your goals and budget.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex items-center space-x-4 rounded-2xl p-2"
              variants={stepVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 bg-[#FFA70420] rounded-full flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <span className="text-[#FFA704] font-light text-lg">2</span>
              </motion.div>
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Application Assistance
                </h3>
                <p className="text-secondary-black font-light">
                  From filling out forms to submitting transcripts, we’ll ensure
                  your application is complete and competitive.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex items-center space-x-4 rounded-2xl p-2"
              variants={stepVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 bg-[#FFA70420] rounded-full flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.4 }}
              >
                <span className="text-[#FFA704] font-light text-lg">3</span>
              </motion.div>
              <div>
                <h3 className="text-lg font-medium mb-1">Visa Support</h3>
                <p className="text-secondary-black font-light">
                  Student visa processes can be tricky. We’ll guide you
                  step-by-step and help you gather all required documents.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="flex items-center space-x-4 rounded-2xl p-2"
              variants={stepVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 bg-[#FFA70420] rounded-full flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.6 }}
              >
                <span className="text-[#FFA704] font-light text-lg">4</span>
              </motion.div>
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Interview Preparation
                </h3>
                <p className="text-secondary-black font-light">
                  If your visa or school requires an interview, we’ll coach you
                  to feel confident and ready.
                </p>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              className="flex items-center space-x-4 rounded-2xl p-2"
              variants={stepVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 bg-[#FFA70420] rounded-full flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.8 }}
              >
                <span className="text-[#FFA704] font-light text-lg">4</span>
              </motion.div>
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Pre-Departure Briefing
                </h3>
                <p className="text-secondary-black font-light">
                  We cover travel planning, accommodation, what to pack, and
                  cultural tips to help you adjust abroad.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default StudySupport;
