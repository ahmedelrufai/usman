import Container from "@/components/Container";
import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Container>
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl font-medium text-primary-black mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-secondary-black max-w-3xl mx-auto font-light">
            With over three years of operational excellence and a team of highly
            skilled professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl p-8"
            variants={fadeInLeft}
            whileHover="hover"
          >
            <h3 className="text-2xl font-medium text-primary-black mb-4 leading-8">
              Employment Success
            </h3>
            <p className="text-secondary-black mb-4 font-light">
              Successfully facilitated 400+ legal employment placements and work
              permit approvals for both skilled and unskilled African
              professionals.
            </p>
            <div className="text-sm text-secondary-black font-light leading-8">
              <strong>Markets served:</strong> Poland, Serbia, Slovakia,
              Germany, Norway, Czech Republic, Lithuania, Qatar, Saudi Arabia,
              Bahrain, UAE, Denmark, Luxembourg, and Portugal.
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8"
            variants={fadeInRight}
            whileHover="hover"
          >
            <h3 className="text-2xl font-medium text-primary-black mb-4 leading-8">
              Visa Processing
            </h3>
            <p className="text-secondary-black mb-4 font-light">
              Effectively processed over 1,300 visa applications spanning
              visitor, business, and official categories.
            </p>
            <div className="text-sm text-secondary-black leading-8 font-light">
              <strong>Destinations:</strong> Schengen Zone, UK, US, Canada, New
              Zealand, Australia, Japan, Brazil, Russia, Cuba, Thailand, Turkey,
              China, India, Gulf States, and various African nations.
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ExperienceSection;
