"use client";

import Container from "@/components/Container";
import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  width?: number;
  height?: number;
  subTitle: string;
  textClass?: string;
  className?: string;
};

const Card = ({
  icon,
  title,
  subTitle,
  width = 40,
  height = 40,
  textClass = "",
  className = "",
}: CardProps) => {
  return (
    <div
      className={`bg-white p-8 py-14 rounded-2xl flex flex-col justify-between gap-8 ${className}`}
    >
      <div className="mb-2">
        <Image src={icon} width={width} height={height} alt={title} />
      </div>
      <div>
        <h3 className={`text-2xl mb-2 text-primary-black ${textClass}`}>
          {title}
        </h3>
        <p className="font-light text-xl text-secondary-black">{subTitle}</p>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  const data = [
    {
      icon: "/images/car-rentals/what-we-offer/1.png",
      title: `Short & Long-Term Rentals`,
      subTitle:
        "Hourly, daily, weekly, or monthly packages tailored to your needs.",
    },
    {
      icon: "/images/car-rentals/what-we-offer/2.png",
      title: "Wide Range of Vehicles",
      subTitle: "From compact cars to SUVs and executive rides.",
    },
    {
      icon: "/images/car-rentals/what-we-offer/3.png",
      title: "Chauffeur Services",
      subTitle: "Professional drivers available for stress-free travel.",
    },
    {
      icon: "/images/car-rentals/what-we-offer/4.png",
      title: "Airport Pick-up & Drop-off",
      subTitle: "On-time service that makes travel easy.",
    },
    {
      icon: "/images/car-rentals/what-we-offer/5.png",
      title: "Affordable Pricing",
      subTitle: "No hidden fees—just honest, upfront rates.",
    },
  ];

  return (
    <Container>
      <div className="sm:py-16 md:mt-16">
        <div className="mx-auto">
          <div className="text-center mb-4 sm:mb-10">
            <h2 className="text-4xl font-medium text-primary-black mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {data.slice(0, 3).map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {data.slice(3).map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeOffer;
