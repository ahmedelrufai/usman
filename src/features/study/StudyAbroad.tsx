"use client";

import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

const StudyAbroad: React.FC = () => {
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
        className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 sm:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div className="order-2 lg:order-1" variants={imageVariants}>
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <div className="aspect-[5/4]">
                <Image
                  src="/images/study/study.png"
                  alt="T"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Subtle floating elements on image */}
                <motion.div
                  className="absolute top-6 right-6 w-3 h-3 bg-blue rounded-full opacity-70"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            variants={contentVariants}
          >
            {/* Main heading */}
            <motion.h1
              className="text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[40px] font-medium text-primary-black leading-tight text-center lg:text-left"
              variants={itemVariants}
            >
              Why Study Abroad with Us?
            </motion.h1>

            {/* Steps */}
            <motion.div className="space-y-6" variants={itemVariants}>
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
                    Choose the right course and university
                  </h3>
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
                    Choose the right course and university
                  </h3>
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
                  <h3 className="text-lg font-medium mb-1">
                    Secure scholarships or funding options
                  </h3>
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
                    Apply for your student visa
                  </h3>
                </div>
              </motion.div>

              {/* 5 */}
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
                    5 Prepare for departure and settle in smoothly
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <Button label="Book Your Ticket Now" className="mx-auto" />
    </Container>
  );
};

export default StudyAbroad;
