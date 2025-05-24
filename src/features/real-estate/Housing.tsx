"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "@/components/ui/Title";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { LocateFixedIcon } from "lucide-react";

interface LocationCardProps {
  location: string;
  imageUrl: string;
  alt: string;
  delay?: number;
}

const LocationCard: React.FC<LocationCardProps> = ({
  location,
  imageUrl,
  alt,
  delay = 0,
}) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl aspect-[4/3]"
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Image as card background */}
        <img
          src={imageUrl}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for better text readability */}
        <motion.div
          className="absolute inset-0 bg-black/20"
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
          transition={{ duration: 0.3 }}
        />

        {/* Location badge */}
        <motion.div
          className="absolute top-6 left-6 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: (delay + 200) / 1000, duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <LocateFixedIcon size={16} className="opacity-80" />
            <span className="text-sm font-medium">{location}</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Housing: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <Container>
        <motion.div
          className="flex text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-3xl font-medium text-gray-900 mb-6 text-start leading-tight flex-1"
            variants={itemVariants}
          >
            Popular Housing Across
            <br />
            the World
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-secondary-black max-w-sm text-start leading-relaxed font-light"
            variants={itemVariants}
          >
            Whether it's your first apartment, a family home, or your next big
            investment we'll make it easier than you think.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <LocationCard
            location="Zanzibar"
            imageUrl="/images/real-estate/housing/1.png"
            alt="Traditional houses in Zanzibar with coastal architecture"
            delay={600}
          />

          <LocationCard
            location="South Africa"
            imageUrl="/images/real-estate/housing/2.png"
            alt="Modern apartment buildings in South Africa"
            delay={800}
          />

          <LocationCard
            location="Europe"
            imageUrl="/images/real-estate/housing/3.png"
            alt="European architecture and housing"
            delay={1000}
          />
        </div>

        <div className="w-full">
          <Button label="Coming soon" className="mx-auto " />
        </div>
      </Container>
    </div>
  );
};

export default Housing;
