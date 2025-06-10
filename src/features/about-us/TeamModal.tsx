import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";

const team = [
  {
    name: "Juma Siddig Juma",
    title: "Co-Founder & Operations Manager – Kampala Main Office",
    desc: "A results-driven manager overseeing day-to-day operations and driving strategic growth from our central hub in Kampala.",
    img: "/images/team/juma.jpg",
  },
  {
    name: "Ousmane Mahamat Oumar",
    title: "Co-Founder & Managing Director – Abuja Office",
    desc: "Leads the West and Central African division with a focus on expansion, partnership, compliance, and client-centric service delivery across the region.",
    img: "/images/team/ousmane.jpg",
  },
  {
    name: "Akampurira Bronia",
    title: "Legal Adviser - Kampala, Uganda",
    desc: "Provides legal oversight and ensures our services are delivered in full compliance with local and international regulatory standards.",
    img: "/images/team/bronia.jpg",
  },
  {
    name: "Babiker Abdelrahman Hanafy",
    title: "Senior Customer Manager - Kampala, Uganda",
    desc: "Manages client relationships with a commitment to delivering exceptional service experiences and building long-term partnerships.",
    img: "/images/team/babiker.jpg",
  },
  {
    name: "Esra Abdalaziz Zakaria Adam",
    title: "Senior Customer Manager - Kampala, Uganda",
    desc: "Leads customer engagement efforts and ensures service excellence across diverse sectors and client segments.",
    img: "/images/team/esra.jpg",
  },
  {
    name: "Mariia Koliadenko",
    title: "Employment Manager - Wrocław, Poland",
    desc: "Oversees international employment placements and ensures all recruitment & work permit processes are efficient, ethical, and compliant.",
    img: "/images/team/mariia.jpg",
  },
  {
    name: "Negash",
    title:
      "Trade Facilitator & Senior Customer Manager - Addis Abeba, Ethiopia",
    desc: "Specializes in cross-border trade facilitation and senior-level client engagement, supporting seamless transactions and global partnerships.",
    img: "/images/team/negash.jpg",
  },
  {
    name: "Wang TingTing",
    title: "Trade & Logistics Facilitator - Guangzhou, China",
    desc: "Plays a vital role in coordinating trade logistics and enhancing operational efficiency in East Asia.",
    img: "/images/team/wang.jpg",
  },
];

const TeamModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white max-w-6xl w-full rounded-2xl shadow-xl p-8 relative overflow-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col items-center text-center mb-8 gap-4">
          <SecondaryButton label="Our Team" variant="secondary" />
          <Title className="text-center">Meet our Team</Title>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-36 h-36 relative rounded-full overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="italic text-sm text-gray-700">{member.title}</p>
                {/* <p className="text-gray-500 text-sm mt-1">{member.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamModal;
