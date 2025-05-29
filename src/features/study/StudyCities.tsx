"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { LocateFixedIcon } from "lucide-react";
import React from "react";

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
      className="group cursor-pointer flex-shrink-0 w-96 h-60"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl w-full h-full"
        transition={{ duration: 0.3 }}
      >
        {/* Fixed image dimensions */}
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="absolute inset-0 object-cover"
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

const StudyCities: React.FC = () => {
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
    <div className="p-4 md:p-8 md:mt-16">
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
            Where Can You Study?
          </motion.h1>
        </motion.div>
      </Container>

      {/* Horizontal scrollable container */}
      <div className="overflow-x-auto pb-4 mb-12 scrollbar-hidden">
        <div className="flex gap-6 w-max">
          <LocationCard
            location="United Kingdom"
            imageUrl="/images/relocation/city-1.png"
            alt="City"
            delay={600}
          />

          <LocationCard
            location="Dublin, Ireland"
            imageUrl="/images/relocation/city-2.png"
            alt="City"
            delay={800}
          />

          <LocationCard
            location="Amsterdam, Netherlands"
            imageUrl="/images/relocation/city-1.png"
            alt="City"
            delay={1000}
          />

          <LocationCard
            location="Vienna, Austria"
            imageUrl="/images/relocation/city-2.png"
            alt="City"
            delay={1200}
          />
        </div>
      </div>

      <div className="w-full">
        <Button label="Talk to our Agent" className="mx-auto " />
      </div>
    </div>
  );
};

export default StudyCities;
