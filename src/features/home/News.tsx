"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { redirectToWhatsApp } from "@/helper";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

type NewsCardProps = {
  image: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  index: number;
};

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  date,
  author,
  title,
  excerpt,
  index,
}) => {
  return (
    <motion.article
      className="rounded-2xl overflow-hidden transition-all duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex justify-between flex-col pt-6 min-h-[240px]">
        <div>
          <div className="flex items-center gap-2 text-secondary-black mb-4">
            <span className="font-semibold">{date}</span>
            <span>•</span>
            <span>By {author}</span>
          </div>

          <h3 className="text-2xl font-medium text-primary-black mb-3 leading-8 line-clamp-3">
            {title}
          </h3>
        </div>

        <div className="">
          <p className="text-secondary-black text-[15px] font-light leading-6 mb-4 truncate">
            {excerpt}
          </p>

          <button className="text-primary-orange font-medium text-sm hover:text-orange-500 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const News = () => {
  const router = useRouter();
  const newsArticles = [
    {
      image: "https://picsum.photos/800/600",
      date: "September 26, 2024",
      author: "Arjun",
      title: "Poland's Economic Growth Is Threatened By Severe Labor Shortages",
      excerpt:
        "Estimates suggest that Poland's labor shortage could reach 1.8 million workers by 2030, significantly impacting the country's economic growth trajectory and industrial development plans.",
    },
    {
      image: "https://picsum.photos/801/600",
      date: "May 15, 2025",
      author: "Arjun",
      title:
        "Labor Market Test Eliminated; Stricter Contract and Notification Requirements for Employers",
      excerpt:
        "A new law in Poland will implement several important changes affecting both employers and foreign workers, streamlining processes while introducing enhanced compliance measures.",
    },
    {
      image: "https://picsum.photos/802/600",
      date: "September 26, 2024",
      author: "Arjun",
      title: "Germany Faces Urgent Need for Skilled Workers to Sustain Economy",
      excerpt:
        "In the first half of 2024, Germany issued 80,000 employment visas, highlighting the country's critical demand for skilled professionals across various sectors to maintain economic stability.",
    },
  ];

  return (
    <div className="py-16">
      <Container>
        {/* Latest News Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-medium text-primary-black mb-6">
            Latest News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <NewsCard key={index} {...article} index={index} />
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
            Your goals are global. So are we.
          </h2>

          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with ARJUN GLOBAL SERVICES today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              hideOnMobile={false}
              label=" Get a Free Quote"
              onClick={() =>
                window.open("https://survey.zohopublic.com/zs/uDCIrB", "_blank")
              }
              className="py-3.5 px-10 border-2 border-[#ffa704]"
            />

            <button
              className="px-10 py-3.5 border-2 border-white text-white rounded-full font-medium transition-all duration-300 min-w-48"
              onClick={() => {
                redirectToWhatsApp();
              }}
            >
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default News;
