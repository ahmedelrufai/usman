"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  subTitle: string;
  index: number;
};

const Card: React.FC<CardProps> = ({ image, title, subTitle, index }) => {
  return (
    <motion.article
      className="overflow-hidden transition-all duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="rounded-2xl aspect-[9/5] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex justify-between flex-col pt-6 gap-4">
        <div>
          <h3 className="text-2xl font-medium text-primary-black leading-8 line-clamp-1">
            {title}
          </h3>
        </div>

        <div className="">
          <p className="text-secondary-black text-[15px] font-light mb-4">
            {subTitle}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const VisaPlan = () => {
  const data = [
    {
      image: "/images/travel-and-visa/visa-plan/1.png",
      title: "Flight Booking",
      subTitle:
        "We find the best routes at the best prices with flexible options tailored to your schedule and budget.",
    },
    {
      image: "/images/travel-and-visa/visa-plan/2.png",
      title: "Hotel Reservations",
      subTitle:
        "Need a place to stay? From budget hotels to luxury stays, we’ll help you secure reliable accommodations anywhere in the world.",
    },
    {
      image: "/images/travel-and-visa/visa-plan/3.png",
      title: "Travel Insurance",
      subTitle:
        "Protect your trip with comprehensive travel insurance. Medical coverage, trip cancellation, lost baggage—we’ve got you covered.",
    },
    {
      image: "/images/travel-and-visa/visa-plan/4.png",
      title: "Airport Transfers",
      subTitle:
        "No guesswork. No scams. We arrange secure airport pick-up and drop-off services for a smooth arrival and departure experience.",
    },
  ];

  return (
    <div className="py-16">
      <Container>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-medium text-primary-black mb-10 text-center">
            More Than Just Visas Plan Your Entire Trip With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((article, index) => (
              <Card key={index} {...article} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-blue rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-[40px] font-medium mb-4">
            Start Your Visa Process Today
          </h2>

          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Our travel experts are ready to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              hideOnMobile={false}
              label={"Get Started Now"}
              className="py-3.5 px-10 border-2 border-[#ffa704]"
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default VisaPlan;
