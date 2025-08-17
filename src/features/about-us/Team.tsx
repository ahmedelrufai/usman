import Container from "@/components/Container";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";
import TeamModal from "./TeamModal";

const team = [
  {
    name: "Juma Siddig Juma",
    title: "Co-Founder & Operations Manager",
    desc: "A visionary leader and strategic operations expert who oversees the comprehensive day-to-day management of our flagship With extensive experience in business development and operational excellence, Juma drives organizational growth through innovative process optimization and strategic planning initiatives.\n\nHis leadership encompasses cross-departmental coordination, resource allocation, performance monitoring, and the implementation of scalable operational frameworks that support our expanding presence across East Africa.\n\nJuma's commitment to operational efficiency and team development has been instrumental in establishing our company's reputation for reliability and professional excellence in the region.",
    img: "/images/team/juma.jpg",
  },
  {
    name: "Ousmane Mahamat Oumar",
    title: "Co-Founder & Managing Director",
    desc: "A dynamic business leader and strategic visionary who spearheads our West and Central African operations. With deep expertise in market expansion and regional business development, Ousmane leads comprehensive initiatives focused on strategic partnerships, regulatory compliance, and exceptional client service delivery across diverse markets.\n\nHis leadership encompasses the development of market entry strategies, establishment of key stakeholder relationships, navigation of complex regulatory environments, and the cultivation of long-term client partnerships that drive sustainable growth.\n\nOusmane's proven track record in building robust business networks and his commitment to excellence have positioned our organization as a trusted partner throughout the West and Central African business landscape.",
    img: "/images/team/ousmane.jpg",
  },
  {
    name: "Akampurira Bronia",
    title: "Legal Adviser",
    desc: "A highly qualified legal professional specializing in comprehensive legal oversight and regulatory compliance across multiple jurisdictions and business sectors.\n\nWith extensive knowledge of both local Ugandan law and international regulatory frameworks, Bronia ensures that all our business operations, client services, and strategic initiatives are conducted in full accordance with applicable legal standards.\n\nHer expertise encompasses contract law, corporate governance, regulatory compliance, risk assessment, and the development of legal protocols that protect both our organization and our clients' interests.\n\nBronia's meticulous attention to detail and proactive approach to legal risk management has been essential in maintaining our company's impeccable reputation for ethical business practices and regulatory compliance throughout our operational territories.",
    img: "/images/team/bronia.jpeg",
  },
  {
    name: "Babiker Abdelrahman Hanafy",
    title: "Financial Manager",
    desc: "An experienced customer relationship specialist dedicated to delivering exceptional service experiences and fostering long-term strategic partnerships with our diverse client portfolio.\n\nWith a proven track record in client relationship management and service excellence, Babiker develops and implements comprehensive customer engagement strategies that ensure maximum client satisfaction and retention.\n\nHis responsibilities include managing high-value client accounts, coordinating complex service delivery processes, resolving challenging customer issues, and identifying opportunities for service enhancement and business expansion.\n\nBabiker's commitment to understanding each client's unique needs and his ability to deliver tailored solutions has consistently resulted in strong client loyalty and significant business growth through referrals and repeat engagements.",
    img: "/images/team/babiker.jpeg",
  },
  {
    name: "Esra Abdalaziz Zakaria Adam",
    title: "Senior Customer Manager",
    desc: "A dedicated customer engagement leader who specializes in managing complex client relationships and ensuring service excellence across diverse industry sectors and market segments.\n\nWith comprehensive experience in customer service management and business development, Esra leads strategic customer engagement initiatives that drive satisfaction, loyalty, and long-term partnership development.\n\nHer expertise includes managing multi-tiered client portfolios, developing customized service solutions, coordinating cross-functional service delivery teams, and implementing quality assurance protocols that consistently exceed client expectations.\n\nEsra's exceptional communication skills and deep understanding of various industry requirements have made her instrumental in expanding our client base and maintaining our reputation for outstanding customer service throughout the East African market.",
    img: "/images/team/esra.jpg",
  },

  {
    name: "Negash Mulatu Debalke",
    title:
      "Trade Facilitator & Senior Customer Manager - Addis Abeba, Ethiopia",
    desc: "A versatile business professional who combines expertise in international trade facilitation with senior-level client relationship management to support seamless cross-border transactions and strategic partnerships.\n\nWith deep knowledge of African trade corridors, customs procedures, and international commerce regulations, Negash specializes in removing barriers to trade and creating efficient pathways for business growth across regional markets.\n\nHis dual role encompasses managing complex trade logistics, coordinating with customs authorities and regulatory bodies, developing trade finance solutions, and maintaining high-level client relationships that span multiple countries and industries.\n\nNegash's unique combination of trade expertise and customer management skills has been crucial in establishing our organization as a leading facilitator of African continental trade and a trusted partner for businesses seeking to expand their regional presence.",
    img: "/images/team/negash.jpeg",
  },
  {
    name: "Tall Salah",
    title: "Senior Customer Manager",
    desc: "A Senior Customer Manager who plays a vital role in coordinating complex international trade operations and enhancing operational efficiency across our East Asian business networks.\n\nWith comprehensive experience in Chinese market dynamics, international shipping protocols, and supply chain management, Wang TingTing ensures seamless coordination of trade logistics that connect Asian markets with our global operations.\n\nHer expertise includes managing shipping documentation, coordinating with freight forwarders and customs brokers, optimizing supply chain routes, ensuring compliance with international trade regulations, and developing strategic partnerships with key logistics providers.\n\nWang TingTing's deep understanding of East Asian business culture and her meticulous approach to logistics coordination have been instrumental in establishing efficient trade corridors that reduce costs, minimize delays, and enhance our clients' competitive advantage in international markets.",
    img: "/images/team/salah.jpg",
  },
  {
    name: "Abdallah Mahamat",
    title: "Technical Team Manager",
    desc: "A highly skilled Technical Team Manager with extensive experience in leading cross-functional engineering teams and delivering innovative technology solutions. \n\nHe specializes in managing complex technical projects, streamlining development processes, and ensuring seamless collaboration between developers, designers, and stakeholders. \n\nWith a strong background in software engineering and team leadership, Abdallah focuses on driving technical excellence, mentoring team members, and implementing best practices that enhance productivity and product quality. \n\nHis leadership has been instrumental in aligning technical strategies with business goals, fostering innovation, and delivering solutions that scale effectively to meet organizational needs.",
    img: "/images/team/abdallah.jpg",
  }
  ,
];

const Team = () => {
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [member, setMember] = useState<any>();

  return (
    <Container>
      <div className="text-center mb-12 mx-auto mt-16 sm:mt-30">
        <div className="flex flex-col items-center text-center mb-8 gap-4">
          <SecondaryButton label="Our Team" variant="secondary" />
          <Title className="text-center"> Our Management Team</Title>
        </div>

        <p className="text-xl text-secondary-black max-w-4xl mx-auto font-light">
          Our leadership team is composed of seasoned professionals with deep
          expertise across operations, legal advisory, customer relations,
          employment services, trade facilitation, and logistics. United by a
          shared commitment to integrity, excellence, and global connectivity.
        </p>
      </div>

      <div>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              onClick={() => {
                setShowTeamModal(true);
                setMember(member);
              }}
              className="flex flex-col items-center text-center gap-4 cursor-pointer"
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {showTeamModal && (
        <TeamModal onClose={() => setShowTeamModal(false)} member={member} />
      )}
    </Container>
  );
};

export default Team;
