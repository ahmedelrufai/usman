import Container from "@/components/Container";
import { Eye, Target } from "lucide-react";
import React from "react";

const VisionAndMission = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-12 mt-16 sm:mt-30">
        <div className="bg-blue text-white rounded-2xl p-10">
          <div className="flex items-center mb-6">
            <Eye className="w-8 h-8 mr-3" />
            <h3 className="text-3xl font-medium">Our Vision</h3>
          </div>
          <p className="text-lg leading-relaxed text-blue-100">
            To become Africa's leading multi-sector service provider, delivering
            risk-free visa and job placement solutions, while redefining global
            mobility, trade facilitation, and lifestyle experiences. We are
            committed to connecting Africa to the world through innovative,
            customer-centric, cost-effective, and legally compliant services.
          </p>
        </div>
        <div className="bg-blue text-white rounded-2xl p-10">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 mr-3" />
            <h3 className="text-3xl font-medium">Our Mission</h3>
          </div>
          <p className="text-lg leading-relaxed text-indigo-100">
            To empower individuals and businesses across Africa by providing
            reliable, professional, and affordable services in travel, legal
            migration, international employment, real estate, logistics, and
            trade. Through operational excellence and strategic partnerships, we
            simplify cross-border processes and drive sustainable growth.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default VisionAndMission;
