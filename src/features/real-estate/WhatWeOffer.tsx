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
        <h3 className={`text-2xl mb-4 text-primary-black ${textClass}`}>
          {title}
        </h3>
        <p className="font-light text-xl text-secondary-black">{subTitle}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const data = [
    {
      icon: "/images/real-estate/what-we-offer/1.png",
      title: `Property Rentals`,
      subTitle: "Affordable and convenient housing options short or long term.",
    },
    {
      icon: "/images/real-estate/what-we-offer/2.png",
      title: "Property Sales",
      subTitle:
        "From family homes to commercial spaces, we’ll help you buy with confidence.",
    },
    {
      icon: "/images/real-estate/what-we-offer/3.png",
      title: "International Property Support",
      subTitle:
        "Interested in real estate abroad? We’ll guide you through it safely and legally.",
    },
    {
      icon: "/images/real-estate/what-we-offer/4.png",
      title: "Investment Opportunities",
      subTitle:
        "Looking to grow your portfolio? We match you with the right properties.",
    },
    {
      icon: "/images/real-estate/what-we-offer/5.png",
      title: "Property Management",
      subTitle:
        "Let us handle your maintenance, tenants, and upkeep stress-free.",
    },
  ];

  return (
    <Container>
      <div className="sm:py-16">
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

export default WhyUs;
