import Container from "@/components/Container";
import { Award, Globe, Handshake, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";

const CoreValue = () => {
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description:
        "We uphold the highest standards of ethics and accountability in every aspect of our work. Integrity is the foundation of the trust we build with every stakeholder.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description:
        "We are committed to delivering consistently A-Class, dependable, and value-driven services. Excellence is not just our goal—it is our standard.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: "Global Partnerships",
      description:
        "We foster strategic global alliances in all our fields rooted in mutual respect, legal compliance, and cultural sensitivity. Our partnerships extend our global reach and enhance the value we deliver.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Transparency",
      description:
        "We believe in clear, open, and honest communication. Transparency underpins our client relationships, decision-making processes, and operational practices.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Client Commitment",
      description:
        "Our clients are at the center of everything we do. We listen, we understand, we share, and we act with dedication to ensure their goals are achieved seamlessly and successfully.",
    },
  ];

  // Animation variants
  const container = {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconAnimation = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <Container>
        <motion.div
          className="text-center mb-12 mt-16 sm:mt-30"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-medium text-primary-black mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-secondary-black max-w-3xl mx-auto font-light">
            Our operations are anchored in a strong value system that guides our
            actions and shapes our culture
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100"
              variants={cardAnimation}
              whileHover="hover"
            >
              <motion.div className="mb-4" variants={iconAnimation}>
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-medium text-primary-black mb-3">
                {value.title}
              </h3>
              <p className="text-secondary-black leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default CoreValue;
