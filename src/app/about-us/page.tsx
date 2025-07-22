"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import CompanyOverview from "@/features/about-us/CompanyOverview";
import CoreValue from "@/features/about-us/CoreValue";
import ExperienceSection from "@/features/about-us/ExperienceSection";
import HeroSection from "@/features/about-us/HeroSection";
import Legal from "@/features/about-us/Legal";
import Team from "@/features/about-us/Team";
import VisionAndMission from "@/features/about-us/VisionAndMission";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function AboutUs() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <ExperienceSection />
      <CoreValue />
      <VisionAndMission />
      <Legal />
      <Team />

      {/* CTA Section */}
      <Container>
        <motion.div
          className="bg-blue rounded-3xl p-12 text-center text-white my-16 sm:my-30"
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
                window.open("https://forms.zohopublic.com/arjunglobal/form/ExpertConsultation/formperma/jSoQBm4p_6txtYEWvrVPWWRigXfzvzEM6Ba7cLtDONk", "_blank")
              }
              className="py-3.5 px-10 border-2 border-[#ffa704]"
            />

            <button className="px-10 py-3.5 border-2 border-white text-white rounded-full font-medium transition-all duration-300 min-w-48">
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
