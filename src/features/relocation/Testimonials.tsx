"use client";

import { useEffect, useState, useRef, TouchEvent } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { testimonials } from "../home/Testimonials";

type TestimonialProps = {
  quote: string;
  name: string;
  location: string;
  image: string;
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | "">(
    ""
  );
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset auto-slide timer when slide changes manually
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const prevSlide = () => {
    setSlideDirection("right");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setSlideDirection("");
    }, 300);

    resetInterval();
  };

  const nextSlide = () => {
    setSlideDirection("left");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection("");
    }, 300);

    resetInterval();
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex > currentIndex) {
      setSlideDirection("left");
    } else if (slideIndex < currentIndex) {
      setSlideDirection("right");
    }

    setTimeout(() => {
      setCurrentIndex(slideIndex);
      setSlideDirection("");
    }, 300);

    resetInterval();
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    // If swipe length is long enough
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        nextSlide();
      } else {
        // Swipe right
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-16">
          <h3 className="inline-block px-6 py-2 bg-blue text-white rounded-full text-sm font-medium mb-6">
            Testimonials
          </h3>
          <h2 className="text-4xl font-medium text-primary-black mb-4">
            Hear From Our Clients
          </h2>
        </div>

        <div className="relative mx-auto px-4 overflow-hidden">
          <div
            ref={slideRef}
            className={`transition-transform duration-300 ease-in-out ${
              slideDirection === "left"
                ? "translate-x-[-5%] opacity-0"
                : slideDirection === "right"
                ? "translate-x-[5%] opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="flex flex-col items-center">
              <p className="text-2xl text-center text-secondary-black mb-10 font-light max-w-[700px]">
                {`"${testimonials[currentIndex].quote}"`}
              </p>

              <div className="mb-6">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-xl font-medium text-primary-black">
                {testimonials[currentIndex].name},{" "}
                {testimonials[currentIndex].location}
              </h3>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-blue w-4" : "bg-gray-300"
                } transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
