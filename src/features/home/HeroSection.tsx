"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CgArrowRight } from "react-icons/cg";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const router = useRouter();

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  // Standard item animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Notification badge animation
  const badgeVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-8 md:py-10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* New Jobs Notification */}
        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center bg-[#E7E9E9] rounded-full px-2 py-1.5 pr-4 shadow-sm cursor-pointer"
            variants={badgeVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="text-white text-sm font-semibold bg-blue rounded-full px-3 py-1 mr-2"
              animate={{}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              New
            </motion.span>
            <span className="text-primary-black text-sm mr-2">
              {"We've just added new jobs"}
            </span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CgArrowRight size={24} className="text-primary-black" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-[55px] font-medium text-primary-black max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.span
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            Helping You Move,
          </motion.span>
          <br className="hidden sm:block" />
          <motion.span
            className="block mt-2"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            Work, Live, and Thrive.
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-xl max-sm:text-sm max-sm:mt-3 text-secondary-black max-w-3xl mx-auto font-light"
          variants={itemVariants}
        >
          One trusted team for all your travel, work, housing, and <br />{" "}
          logistics needs.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-7 flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <Button
              label="Get a Free Consultation"
              onClick={() => router.push("/")}
              hideOnMobile={false}
              className="max-sm:mx-auto"
            />
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="secondary"
              label="Explore Services"
              onClick={() => router.push("#our-services")}
              hideOnMobile={false}
              className="max-sm:mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Trusted by Experts */}
        <motion.div
          className="mt-10 flex flex-row justify-center items-center gap-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex -space-x-3"
            // initial="hidden"
            // animate="visible"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-10 max-sm:h-8 max-sm:w-8 rounded-full overflow-hidden border-2 border-white shadow-md"
                style={{
                  transform: `translateX(${(i - 3) * 5}px)`,
                  zIndex: 6 - i,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <Image
                  src={`/images/hero/expert-${i}.png`}
                  alt={`Expert ${i}`}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          <motion.p
            className="text-secondary-black text-xl font-light max-sm:text-sm"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Trusted by top experts.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
