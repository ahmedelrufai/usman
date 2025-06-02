"use client";

import Container from "@/components/Container";
import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  width?: number;
  height?: number;
  textClass?: string;
  className?: string;
};

const Card = ({
  icon,
  title,
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
      <h3 className={`text-2xl mb-4 text-primary-black ${textClass}`}>
        {title}
      </h3>
    </div>
  );
};

const WhyItWorks = () => {
  const data = [
    {
      icon: "/images/how-it-works/why-it-works/1.png",
      title: `Fast turnaround`,
    },
    {
      icon: "/images/how-it-works/why-it-works/2.png",
      title: "Transparent pricing",
    },
    {
      icon: "/images/how-it-works/why-it-works/3.png",
      title: "No guesswork or stress",
    },
    {
      icon: "/images/how-it-works/why-it-works/4.png",
      title: "Everything in one place",
    },
    {
      icon: "/images/how-it-works/why-it-works/5.png",
      title: "Friendly team that genuinely wants to see you succeed",
    },
  ];

  return (
    <Container>
      <div className="sm:py-16">
        <div className="mx-auto">
          <div className="text-center mb-4 sm:mb-10">
            <h2 className="text-4xl font-medium text-primary-black mb-4">
              Why It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {data.slice(0, 2).map((item, index) => (
              <Card key={index} icon={item.icon} title={item.title} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {data.slice(2).map((item, index) => (
              <Card key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyItWorks;
