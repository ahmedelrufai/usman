"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Location {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
}

const initialLocations: Location[] = [
  {
    id: 1,
    name: "St. Stephen",
    country: "Hungary",
    image: `https://picsum.photos/500/300`,
    description:
      "Historic cathedral and architectural beauty in Eastern Europe.",
  },
  {
    id: 2,
    name: "Moraine Lake",
    country: "Canada",
    image: `https://picsum.photos/501/300`,
    description: "Stunning turquoise waters in Banff National Park, Alberta.",
  },
  {
    id: 3,
    name: "Oregon Coast",
    country: "USA",
    image: `https://picsum.photos/502/300`,
    description:
      "Dramatic coastlines with rocky formations and peaceful beaches.",
  },
  {
    id: 4,
    name: "Forbidden City",
    country: "China",
    image: `https://picsum.photos/503/300`,
    description:
      "Imperial palace complex showcasing traditional Chinese architecture.",
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    image: `https://picsum.photos/504/300`,
    description: "Iconic white-washed buildings overlooking the Aegean Sea.",
  },
  {
    id: 6,
    name: "Kyoto",
    country: "Japan",
    image: `https://picsum.photos/505/300`,
    description:
      "Ancient temples and traditional gardens reflecting Japanese heritage.",
  },
];

export default function Locations() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const locations = [
    ...initialLocations,
    ...initialLocations,
    ...initialLocations,
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const LocationCard = ({
    location,
    index,
  }: {
    location: Location;
    index: number;
  }) => (
    <div
      key={`${location.id}-${index}`}
      className="flex-shrink-0 w-[300px] md:w-[500px] mx-2 cursor-pointer transition-all duration-500"
    >
      <div className="bg-white overflow-hidden h-full">
        <Image
          src={location.image}
          alt={location.name}
          height={300}
          width={500}
          className="object-cover rounded-2xl"
        />

        <h3 className="text-secondary-black font-light mt-3">
          {location.name}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="max-w-full py-6 overflow-hidden">
      <div className="relative transition-opacity duration-1000">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-indigo-50 to-transparent z-10 h-[300px]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-indigo-50 to-transparent z-10 h-[300px]"></div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {locations.map((location, index) => (
            <LocationCard
              key={`location-${index}`}
              location={location}
              index={index}
            />
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
