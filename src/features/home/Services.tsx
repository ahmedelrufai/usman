"use client";

import Container from "@/components/Container";
import Image from "next/image";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center">
      <div className="text-blue mb-6">
        <Image src={icon} width={59} height={59} alt={title} />
      </div>
      <h3 className="text-xl font-medium mb-4 text-primary-black">{title}</h3>
      <p className="text-secondary-black mb-6 text-lg font-light">
        {description}
      </p>
      <a href="#" className="text-primary-orange font-medium text-lg">
        Learn more
      </a>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "/images/services/abroad.png",
      title: "Job Offers Abroad",
      description:
        "We connect professionals to verified job opportunities overseas with end-to-end support.",
    },
    {
      icon: "/images/services/travel.png",
      title: "Travel & Visa Application",
      description:
        "Get expert assistance with tourist, student, and work visas for multiple destinations.",
    },
    {
      icon: "/images/services/logistics.png",
      title: "Logistics",
      description:
        "From customs clearance to last-mile delivery we manage it all efficiently.",
    },
    {
      icon: "/images/services/real-estate.png",
      title: "Real Estate Services",
      description:
        "Whether you're renting, buying, or investing, we offer trusted property services locally and abroad.",
    },
    {
      icon: "/images/services/rental.png",
      title: "Car Rentals",
      description:
        "Reliable, well-maintained vehicles for all your travel needs daily, weekly, or long-term.",
    },
    {
      icon: "/images/services/ticket.png",
      title: "Ticketing",
      description:
        "Book flights, events, and more with competitive pricing and responsive service.",
    },
  ];

  return (
    <Container>
      <div className="py-16">
        <div className="mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue text-white rounded-full text-sm font-medium mb-6">
              Our services
            </div>
            <h2 className="text-4xl font-medium text-primary-black mb-6">
              {"Pick a Service We'll Handle the Rest!"}
            </h2>
            <p className="text-secondary-black max-w-3xl mx-auto font-light text-lg">
              {
                "Every journey begins with a step and we're here to guide yours. Tap into any of our services below to discover how we can support your travel, career, housing, or business goals with ease and expertise."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
