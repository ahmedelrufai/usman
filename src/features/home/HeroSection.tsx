"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CgArrowRight } from "react-icons/cg";
import Button from "../../components/ui/Button";

const HeroSection = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="py-8 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* New Jobs Notification */}
        <div
          className={`flex justify-center mb-8 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center bg-[#E7E9E9] rounded-full px-2 py-1.5 pr-4 shadow-sm hover:shadow transition-shadow">
            <span className="text-white text-sm font-semibold bg-blue rounded-full px-3 py-1 mr-2">
              New
            </span>
            <span className="text-primary-black text-sm mr-2">
              {"We've just added new jobs"}
            </span>
            <CgArrowRight size={24} className="text-primary-black" />
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-3xl md:text-5xl lg:text-[55px] font-medium text-primary-black max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Helping You Move,
          <br className="hidden sm:block" />
          <span className="block mt-2">Work, Live, and Thrive.</span>
        </h1>

        {/* Subheading */}
        <p
          className={`mt-6 text-xl max-sm:text-sm max-sm:mt-3 text-secondary-black max-w-3xl mx-auto transition-all duration-700 font-light ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          One trusted team for all your travel, work, housing, and <br />{" "}
          logistics needs.
        </p>

        {/* Call-to-Action Buttons */}
        <div
          className={`mt-7 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Button
            label="Get a Free Consultation"
            onClick={() => router.push("/")}
            hideOnMobile={false}
            className="max-sm:mx-auto"
          />
          <Button
            variant="secondary"
            label="Explore Services"
            onClick={() => router.push("/")}
            hideOnMobile={false}
            className="max-sm:mx-auto"
          />
        </div>

        {/* Trusted by Experts */}
        <div
          className={`mt-10 flex flex-row justify-center items-center gap-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="flex -space-x-3">
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
          </div>
          <p className="text-secondary-black text-xl font-light max-sm:text-sm">
            Trusted by top experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
