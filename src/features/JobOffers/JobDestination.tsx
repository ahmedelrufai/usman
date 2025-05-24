"use client";

import Container from "@/components/Container";
import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Props {
  id: number;
  name: string;
  image: string;
}

const data: Props[] = [
  {
    id: 1,
    name: "Matthias Church and the statue of Stephen I of Hungary",
    image: `https://picsum.photos/500/300`,
  },
  {
    id: 2,
    name: "Moraine Lake, in Banff National Park",
    image: `https://picsum.photos/501/300`,
  },
  {
    id: 3,
    name: "Oregon Coast (USA)",
    image: `https://picsum.photos/502/300`,
  },
  {
    id: 4,
    name: "Hongong China",
    image: `https://picsum.photos/503/300`,
  },
  {
    id: 5,
    name: "Oregon Coast (USA)",
    image: `https://picsum.photos/504/300`,
  },
  {
    id: 6,
    name: "Kyoto Japan",
    image: `https://picsum.photos/505/300`,
  },
];

export default function JobDestination() {
  const [isScrolling] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const multiData = [...data, ...data, ...data];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let lastTime = 0;
    const scrollSpeed = 0.05;

    const scroll = (timestamp: number) => {
      if (!isScrolling) {
        animationRef.current = null;
        return;
      }

      if (lastTime === 0) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      scrollContainer.scrollLeft += scrollSpeed * deltaTime;

      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth * 2) / 3) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
    if (isScrolling) {
      animationRef.current = requestAnimationFrame(scroll);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isScrolling]);

  const Card = ({ item, index }: { item: Props; index: number }) => (
    <div
      key={`${item.id}-${index}`}
      className="flex-shrink-0 w-[300px] md:w-[500px] mx-2 cursor-pointer transition-all duration-500"
    >
      <div className="overflow-hidden h-full">
        <Image
          src={item.image}
          alt={item.name}
          height={300}
          width={500}
          className="object-cover rounded-2xl"
        />

        <h3 className="text-secondary-black font-light mt-3">{item.name}</h3>
      </div>
    </div>
  );

  return (
    <div className="max-w-full py-6 overflow-hidden">
      <Container>
        <Title className="text-[40px] text-start">
          Popular Job Destinations
        </Title>
      </Container>
      <div className="relative transition-opacity duration-1000 mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-6 md:w-24 bg-gradient-to-r from-indigo-50 to-transparent z-10 h-[300px]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-6 md:w-24 bg-gradient-to-l from-indigo-50 to-transparent z-10 h-[300px]"></div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {multiData.map((item, index) => (
            <Card key={`item-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
