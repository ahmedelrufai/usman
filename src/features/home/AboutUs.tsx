"use client";

import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Container>
      <div className="sm:mt-30 mt-15 flex flex-col md:flex-row gap-10 items-center">
        <motion.div
          className="w-full md:w-1/2 max-w-[550px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about-us.png"
            width={550}
            height={550}
            alt="About us"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-between w-full md:w-1/2 sm:min-h-[550px] min-h-[370px] rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="inline-block px-6 py-2 bg-blue text-white rounded-full text-sm font-medium mb-6">
              About us
            </h3>
            <h1 className="text-3xl md:text-4xl sm:mb-10 mb-6 text-primary-black">
              Your Trusted Partner for Seamless Global Services
            </h1>
            <p className="text-secondary-black text-xl leading-8 mb-6 font-light max-sm:text-sm max-sm:leading-6">
              At Arjun Global Services, we specialize in delivering professional
              and affordable solutions across multiple industries. From travel
              and visa application services, job placements abroad, real estate,
              car rentals, ticketing, general trade, to logistics, we operate as
              a one-stop service provider dedicated to making your experience
              seamless.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-2 text-primary-black">
              Our Mission:
            </h2>
            <p className="text-secondary-black sm:text-xl text-sm leading-8 font-light max-sm:leading-6">
              To provide professional, affordable, and client-centric solutions
              across every service we offer.
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutUs;
