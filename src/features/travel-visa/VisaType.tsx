"use client";

import Container from "@/components/Container";
import Image from "next/image";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const VisaTypeCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl flex flex-col">
      <div className="text-blue mb-6">
        <Image src={icon} width={40} height={40} alt={title} />
      </div>
      <h3 className="text-xl font-medium mb-4 text-primary-black">{title}</h3>
      <p className="text-secondary-black mb-6 text-lg font-light">
        {description}
      </p>
    </div>
  );
};

const VisaType = () => {
  const data = [
    {
      icon: "/images/travel-and-visa/visa-type/1.png",
      title: "Tourist Visa",
      description:
        "Explore new countries with ease let us handle your tourist visa application from start to finish.",
    },
    {
      icon: "/images/travel-and-visa/visa-type/2.png",
      title: "Student Visa",
      description:
        "Apply to study abroad with expert guidance on documentation, embassy interviews, and approvals.",
    },
    {
      icon: "/images/travel-and-visa/visa-type/3.png",
      title: "Work Permit",
      description:
        "Secure overseas employment opportunities with fast, reliable support for your work visa process.",
    },
    {
      icon: "/images/travel-and-visa/visa-type/4.png",
      title: "Business Visa",
      description:
        "Travel for meetings, deals, or conferences our team ensures your business trip starts without stress.",
    },
    {
      icon: "/images/travel-and-visa/visa-type/5.png",
      title: "Dependent/Family Visa",
      description:
        "Bringing your loved ones along? We help you reunite with smooth and affordable visa assistance.",
    },
    {
      icon: "/images/travel-and-visa/visa-type/6.png",
      title: "Transit Visa",
      description:
        "Just passing through? We’ll help you get the right transit visa with zero complications.",
    },
  ];

  return (
    <Container>
      <div className="py-16 sm:mt-10">
        <div className="mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-medium text-primary-black mb-6">
              {"Visa Types We Support"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.map((service, index) => (
              <VisaTypeCard
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

export default VisaType;
