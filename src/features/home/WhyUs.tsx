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
};

const BenefitCard = ({
  icon,
  title,
  description,
  width = 70,
  height = 70,
  textClass = "",
}: BenefitCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl flex flex-col justify-between">
      <div className="mb-6">
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
      icon: "/images/benefits/partners.png",
      title: `Trusted Partners`,
      description:
        "Skip the hassle. We offer everything you need from visas to logistics in one place.",
    },
    {
      icon: "/images/benefits/experts.png",
      title: "Friendly Experts Who Care",
      description:
        "Real people. Real help. Our team is here to guide you, every step of the way.",
    },
    {
      icon: "/images/benefits/pricing.png",
      title: "Transparent Pricing",
      description: "Know what you're paying for no surprises, no fine print.",
    },
    {
      icon: "/images/benefits/worldwide.png",
      title: "Trusted Worldwide",
      description: "Clients across borders trust us to get the job done right.",
    },
    {
      icon: "/images/benefits/support.png",
      title: "Personalized Support",
      description: "Tell us what you need we'll tailor it to you.",
    },
  ];

  return (
    <Container>
      <div className="py-16">
        <div className="mx-auto">
          <div className="text-center mb-30">
            <div className="inline-block px-6 py-2 bg-blue text-white rounded-full text-sm font-medium mb-6">
              Why us
            </div>
            <h2 className="text-4xl font-medium text-primary-black mb-4">
              Why they prefer Arjun Global
            </h2>
            <p className="text-secondary-black max-w-3xl mx-auto text-lg font-light">
              We make things easy so you can focus on what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-2xl flex flex-col">
                <div className="flex gap-4 mb-6 md:flex-row flex-col">
                  <Image
                    src={benefits[0].icon}
                    width={203}
                    height={170}
                    alt={benefits[0].title}
                  />
                  <h3 className="text-2xl font-medium mb-4 text-primary-black">
                    Trusted <br /> Partners
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {benefits.slice(2).map((benefit, index) => (
              <BenefitCard
                key={index}
                width={index === 1 ? 155 : 80}
                height={index === 1 ? 145 : 80}
                icon={benefit.icon}
                title={benefit.title}
                textClass={index !== 1 ? " max-w-[200px]" : ""}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-blue md:px-10 p-5 rounded-2xl mt-10">
        <div className="text-white max-w-md">
          <h2 className="text-2xl font-medium mb-2">
            Get news latest news about our jobs, travels and real estates
          </h2>
        </div>

        <div className="flex-grow max-w-md w-full">
          <div className="bg-white rounded-full flex overflow-hidden relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 md:py-4 py-3.5 outline-none text-primary-black text-lg w-full"
            />
            <button className="bg-primary-orange text-white md:px-8  px-4 md:py-3 py-2 m-2  font-medium rounded-full absolute right-0 transform transition-transform md:static md:transform-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
