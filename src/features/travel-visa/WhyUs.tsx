"use client";

import Container from "@/components/Container";
import Image from "next/image";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
  textClass?: string;
  className?: string;
};

const BenefitCard = ({
  icon,
  title,
  description,
  width = 70,
  height = 70,
  textClass = "",
  className = "",
}: BenefitCardProps) => {
  return (
    <div
      className={`bg-white p-8 rounded-2xl flex flex-col justify-between ${className}`}
    >
      <div className="mb-2">
        <Image src={icon} width={width} height={height} alt={title} />
      </div>
      <h3
        className={`text-2xl font-medium mb-4 text-primary-black ${textClass}`}
      >
        {title}
      </h3>
      <p className="text-secondary-black text-xl font-light">{description}</p>
    </div>
  );
};

const WhyUs = () => {
  const benefits = [
    {
      icon: "/images/travel-and-visa/benefits/1.png",
      title: `Trusted Partners`,
      description:
        "Skip the hassle. We offer everything you need from visas to logistics in one place.",
    },
    {
      icon: "/images/travel-and-visa/benefits/2.png",
      title: "Fast, Friendly Support",
      description:
        "Real people. Real help. Our team is here to guide you, every step of the way.",
    },
    {
      icon: "/images/travel-and-visa/benefits/3.png",
      title: "24/7 Availability on WhatsApp",
      description: "Tell us what you need we’ll tailor it to you.",
    },
    {
      icon: "/images/travel-and-visa/benefits/4.png",
      title: "End-to-End Guidance",
      description: "Clients across borders trust us to get the job done right.",
    },
  ];

  return (
    <Container>
      <div className="py-16">
        <div className="mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-6 py-2 bg-blue text-white rounded-full text-sm font-medium mb-6">
              Why us
            </div>
            <h2 className="text-4xl font-medium text-primary-black mb-4">
              Why Travelers Trust Arjun Global
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-2xl flex flex-col">
                <div className="flex gap-4 mb-6 flex-col">
                  <Image
                    src={benefits[0].icon}
                    width={203}
                    height={170}
                    alt={benefits[0].title}
                  />
                  <h3 className="text-2xl font-medium mb-4 text-primary-black">
                    Local Experts, Global Reach
                  </h3>
                </div>
                <p className="text-secondary-black text-xl font-light">
                  {benefits[0].description}
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 h-full">
              <div className="bg-white p-8 rounded-2xl flex flex-col h-full">
                <div className="flex flex-col mb-6">
                  <h3 className="text-2xl font-medium mb-4 text-primary-black">
                    {benefits[1].title}
                  </h3>
                  <Image
                    className="self-center my-6"
                    src={benefits[1].icon}
                    width={230}
                    height={70}
                    alt={benefits[1].title}
                  />
                  <p className="text-secondary-black text-xl font-light">
                    {benefits[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mt-8">
            <BenefitCard
              icon={benefits[2].icon}
              title={benefits[2].title}
              className="lg:col-span-4"
              textClass={" max-w-[200px]"}
              description={benefits[2].description}
            />
            <BenefitCard
              width={155}
              height={145}
              icon={benefits[3].icon}
              title={benefits[3].title}
              className="lg:col-span-3"
              description={benefits[3].description}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
