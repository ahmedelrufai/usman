"use client";

import Container from "@/components/Container";
import Image from "next/image";

const logos = [
  { id: 1, image: "/images/trusts/1.png" },
  { id: 2, image: "/images/trusts/2.png" },
  { id: 3, image: "/images/trusts/3.png" },
  { id: 4, image: "/images/trusts/4.png" },
  { id: 5, image: "/images/trusts/5.png" },
  { id: 6, image: "/images/trusts/6.png" },
  { id: 7, image: "/images/trusts/7.png" },
];

const Logo = ({ image, index }: { image: string; index: number }) => (
  <div
    key={`${image}-${index}`}
    className="flex-shrink-0 mx-2 cursor-pointer transition-all duration-500"
  >
    <Image
      src={image}
      alt="trust logo"
      height={50}
      width={100}
      className="object-cover rounded-2xl"
    />
  </div>
);

export default function Trusts() {
  return (
    <Container>
      <div className="w-full py-6 overflow-hidden mt-20">
        <div
          className="flex justify-between items-center overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {logos.map((item, index) => (
            <Logo key={`logo-${index}`} image={item.image} index={index} />
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </Container>
  );
}
