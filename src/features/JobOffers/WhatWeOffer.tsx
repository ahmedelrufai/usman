"use client";

import Container from "@/components/Container";
import Title from "@/components/ui/Title";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

type CardProps = {
  image: string;
  title: string;
  subTitle: string;
  index: number;
};

const WhatWeOffer = () => {
  const Card: React.FC<CardProps> = ({ image, title, subTitle, index }) => {
    return (
      <motion.article
        className="overflow-hidden transition-all duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl aspect-[9/5] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex justify-between flex-col pt-6 gap-4">
          <div>
            <h3 className="text-2xl font-medium text-primary-black leading-8 line-clamp-2">
              {title}
            </h3>
          </div>

          <div className="">
            <p className="text-secondary-black font-light mb-4">{subTitle}</p>
          </div>
        </div>
      </motion.article>
    );
  };

  const data = [
    {
      image: "/images/job-offers/what-we-offer/1.png",
      title: "Verified Job Listings",
      subTitle:
        "We partner with trusted recruiters and companies overseas no fake ads, no hidden fees.",
    },
    {
      image: "/images/job-offers/what-we-offer/2.png",
      title: "End-to-End Application Support",
      subTitle:
        "From resume guidance to interview prep and visa documentation, we’ve got your back.",
    },
    {
      image: "/images/job-offers/what-we-offer/3.png",
      title: "Visa & Travel Assistance",
      subTitle:
        "We help you get your visa approved quickly and guide you through every step of the relocation process.",
    },
    {
      image: "/images/job-offers/what-we-offer/4.png",
      title: "Skilled & Unskilled Roles Available",
      subTitle:
        "Opportunities for both professionals and workers in various industries",
    },
  ];

  return (
    <Container>
      <motion.div
        className="mb-16 sm:mt-30 mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-10">
          <Title>What We Offer</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((article, index) => (
            <Card key={index} {...article} index={index} />
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default WhatWeOffer;
