"use client";

import Container from "@/components/Container";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const WhatWeOffer: React.FC = () => {
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
            What We Offer
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
                  Domestic & International Shipping
                </h3>
                <p className="text-secondary-black font-light">
                  From local deliveries to international freight forwarding, we
                  provide flexible shipping options tailored to your timeline
                  and budget.
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
                  Warehousing & Inventory Management
                </h3>
                <p className="text-secondary-black font-light">
                  Need a safe place to store your goods? Our secure, monitored
                  warehouses and smart inventory systems make storage and
                  distribution effortless.
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
                <h3 className="text-lg font-medium mb-1">
                  Freight Services (Air, Sea, and Land)
                </h3>
                <p className="text-secondary-black font-light">
                  We offer end-to-end freight solutions for bulk and commercial
                  goods. Our partnerships with global carriers ensure your cargo
                  moves efficiently and safely.
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
                  Customs Clearance & Documentation
                </h3>
                <p className="text-secondary-black font-light">
                  Avoid the paperwork headaches. Our team handles customs
                  processes, compliance checks, and documentation so your
                  shipment clears smoothly.
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
                <h3 className="text-lg font-medium mb-1">Last-Mile Delivery</h3>
                <p className="text-secondary-black font-light">
                  From our warehouse to your customer’s doorstep we take care of
                  the final, crucial leg of the journey with real-time tracking
                  and guaranteed delivery windows.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default WhatWeOffer;
