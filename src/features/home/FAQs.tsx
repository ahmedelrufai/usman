"use client";

import Container from "@/components/Container";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-gray-200 py-6 max-md:py-4">
    <button
      className="flex w-full justify-between items-center text-left"
      onClick={onClick}
    >
      <h3 className="text-xl max-md:text-lg font-medium text-primary-black">
        {question}
      </h3>

      <div>
        <ChevronDown
          className={`h-6 w-6 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
    </button>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        <p className="text-secondary-black text-lg leading-7 font-light">
          {answer}
        </p>
      </motion.div>
    )}
  </div>
);

type FAQEntry = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQEntry[] = [
    {
      question: "What services does ARJUN GLOBAL SERVICES offer?",
      answer:
        "We provide a comprehensive range of professional services including travel arrangements, visa application assistance, job placements abroad, real estate services, car rentals, ticketing solutions, general trade services, and logistics support. Our goal is to serve as your one-stop service provider for all your global needs.",
    },
    {
      question: "How do I know which department to contact?",
      answer:
        "You can reach out to our main office through the Contact page, and our team will direct you to the appropriate department based on your specific requirements. We've structured our organization to ensure seamless communication between departments to handle all your needs efficiently.",
    },
    {
      question: "Do I need to visit your office to access your services?",
      answer:
        "While we welcome in-person consultations at our office, most of our services can be accessed remotely. We offer digital consultations, online application processing, and virtual meetings to accommodate clients from anywhere in the world. Our team is equipped to handle your requirements whether you visit us in person or connect with us online.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our service costs vary depending on the specific requirements and complexity of your needs. We pride ourselves on offering transparent, competitive pricing with no hidden fees. For a detailed quote tailored to your specific situation, please contact our team directly through our Contact page.",
    },
    {
      question: "Do you help with job relocation or just job offers abroad?",
      answer:
        "We provide comprehensive job placement services that include both securing job offers abroad and complete relocation assistance. Our services cover job matching, interview preparation, contract negotiation, visa processing, travel arrangements, accommodation support, and cultural orientation to ensure a smooth transition to your new position overseas.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#07567F09]">
      <Container>
        <motion.div
          className="flex md:flex-row flex-col py-16 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6 max-md:items-center flex-3 mb-12">
            <h1 className="text-3xl md:text-4xl text-primary-black max-w-[400px]">
              Frequently Asked Questions
            </h1>
            <p className="text-secondary-black text-xl max-w-2xl font-light">
              Clear answers to help you get started with confidence.
            </p>
            <Button label="Contact" hideOnMobile={false} />
          </div>

          <div className="flex-4 max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default FAQ;
