"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "1",
    image: "/images/how-it-works/1.png",
    title: "Choose a Service",
    subTitle:
      "Browse through our wide range of services from visa applications and job placements to real estate and logistics.",
    tagline: "Need help deciding?",
    action: "Talk to an advisor",
  },
  {
    id: "2",
    image: "/images/how-it-works/2.png",
    title: "Submit Your Request",
    subTitle:
      "Fill out a simple form or get in touch via WhatsApp, email, or phone. We'll guide you through the next steps based on your selected service.",
    tagline: "No paperwork hassle we handle that for you.",
    action: "Talk to an advisor",
  },
  {
    id: "3",
    image: "/images/how-it-works/3.png",
    title: "Get Personalized Support",
    subTitle:
      "Our team of specialists in each department will assist you step by step whether it's gathering documents, applying for visas, booking tickets, or coordinating logistics.",
    tagline: "Real humans. Real support. No bots.",
    action: "Talk to an advisor",
  },
  {
    id: "4",
    image: "/images/how-it-works/4.png",
    title: "Track Your Progress",
    subTitle:
      "We keep you updated throughout the process. You'll always know what's happening next.",
    tagline: "Updates via email, WhatsApp, or your dashboard.",
    action: "Get started",
  },
  {
    id: "5",
    image: "/images/how-it-works/5.png",
    title: "Achieve Your Goal",
    subTitle:
      "Whether it's landing your dream job abroad, finding the right property, or completing a seamless trade or travel experience we help you get there.",
    tagline: "Happy clients, successful outcomes.",
    action: "Talk to an advisor",
  },
];

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Animation variants for each step
const stepVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation variants for image
const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: -30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Animation variants for content
const contentVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const Steps = () => {
  return (
    <Container>
      <motion.div
        className="space-y-12 sm:space-y-20 sm:mt-30 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((item, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              variants={stepVariants}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                isImageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image container */}
              <motion.div
                className="w-full lg:w-1/2 relative aspect-[600/335] max-w-md lg:max-w-none"
                variants={imageVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-2xl lg:rounded-3xl shadow-lg"
                />
              </motion.div>

              {/* Content container */}
              <motion.div
                className="w-full lg:w-1/2 lg:aspect-[600/335] flex justify-between flex-col gap-6 lg:gap-0 px-4 lg:px-0"
                variants={contentVariants}
              >
                <div className="flex flex-col gap-4 lg:gap-6">
                  <motion.h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-base sm:text-lg text-secondary-black font-light leading-relaxed text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {item.subTitle}
                  </motion.p>
                </div>

                <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
                  <motion.span
                    className="text-base sm:text-lg text-secondary-black font-light leading-relaxed text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {item.tagline}
                  </motion.span>
                  <motion.div
                    className="pt-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button label={item.action} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Steps;
