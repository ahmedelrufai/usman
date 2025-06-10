import Container from "@/components/Container";
import React from "react";
import { motion } from "framer-motion";

const CompanyOverview = () => {
  // Statistics data
  const stats = [
    { number: "400+", label: "Legal Employment Placements" },
    { number: "1,300+", label: "Visa Applications Processed" },
    { number: "3+", label: "Years of Excellence" },
    { number: "15+", label: "Countries Served" },
  ];

  // Services offered
  const services = [
    "Travel & Visa Facilitation",
    "International Job Placements",
    "Real Estate Solutions",
    "Car Rentals",
    "Ticketing Services",
    "Trade Facilitation",
    "Logistics Solutions",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="mt-16 sm:30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Container>
        <section className="mb-20 py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Content */}
            <motion.div variants={fadeInLeft}>
              <motion.h2
                className="text-4xl lg:text-5xl font-medium text-primary-black leading-tight mb-4"
                variants={fadeInUp}
              >
                Who We Are
              </motion.h2>

              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.p
                  className="text-lg lg:text-xl text-secondary-black leading-relaxed font-light"
                  variants={fadeInUp}
                >
                  At Arjun, we are a legally compliant, multi-industry service
                  provider dedicated to delivering professional, reliable, and
                  cost-effective solutions that simplify and enhance our
                  clients' cross-border journeys.
                </motion.p>
                <motion.p
                  className="text-lg lg:text-xl text-secondary-black leading-relaxed font-light"
                  variants={fadeInUp}
                >
                  Our diversified portfolio positions us as a comprehensive,
                  one-stop service partner across key global and regional
                  sectors, serving clients throughout Africa, Europe, the Middle
                  East, and beyond.
                </motion.p>
              </motion.div>

              {/* Services grid */}
              <motion.div className="pt-4" variants={fadeInUp}>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  variants={containerVariants}
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 py-2"
                      variants={scaleIn}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-blue rounded-full flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      />
                      <span className="text-sm lg:text-base text-secondary-black font-medium">
                        {service}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right column - Stats */}
            <motion.div
              className="flex items-center justify-center lg:justify-end mt-16"
              variants={fadeInRight}
            >
              <div className="w-full max-w-md">
                <motion.div
                  className="grid grid-cols-2 gap-8"
                  variants={containerVariants}
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-4xl lg:text-5xl font-bold mb-3 text-primary-black"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {stat.number}
                      </motion.div>
                      <motion.div
                        className="text-sm lg:text-base text-secondary-black font-medium leading-snug"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {stat.label}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </Container>
    </motion.div>
  );
};

export default CompanyOverview;
