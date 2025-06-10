"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Title from "@/components/ui/Title";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col max-w-[900px] items-center mx-auto gap-8 sm:mt-15"
      >
        <SecondaryButton label="Job Offers Abroad" />
        <Title>Find Work Opportunities Around the World</Title>
        <p className="text-sm sm:text-xl font-light text-center text-secondary-black">
          Looking to build a better future in a new country? ARJUN GLOBAL
          SERVICES connects skilled professionals and workers with verified job
          opportunities in top destinations. Whether you’re aiming for the UAE,
          Canada, Europe, or elsewhere — we make the process smooth, fast, and
          stress-free.
        </p>
        <Button
          label="Browse Jobs"
          variant="blue"
          className="px-16"
          onClick={() => router.push("/jobs")}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="rounded-2xl aspect-[1200/500] relative overflow-hidden w-full mt-10"
      >
        <Image
          src="/images/job-offers/hero.png"
          alt="Hero"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </motion.div>
    </Container>
  );
};

export default HeroSection;
