import Container from "@/components/Container";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";
import TeamModal from "./TeamModal";

const team = [
  {
    name: "Juma Siddig Juma",
    title: "Co-Founder & Operations Manager – Kampala Main Office",
    desc: "A visionary leader and strategic operations expert who oversees the comprehensive day-to-day management of our flagship Kampala headquarters.\n\nWith extensive experience in business development and operational excellence, Juma drives organizational growth through innovative process optimization and strategic planning initiatives.\n\nHis leadership encompasses cross-departmental coordination, resource allocation, performance monitoring, and the implementation of scalable operational frameworks that support our expanding presence across East Africa.\n\nJuma's commitment to operational efficiency and team development has been instrumental in establishing our company's reputation for reliability and professional excellence in the region.",
    img: "/images/team/juma.jpg",
  },
  {
    name: "Ousmane Mahamat Oumar",
    title: "Co-Founder & Managing Director – Abuja Office",
    desc: "A dynamic business leader and strategic visionary who spearheads our West and Central African operations from our key Abuja regional headquarters.\n\nWith deep expertise in market expansion and regional business development, Ousmane leads comprehensive initiatives focused on strategic partnerships, regulatory compliance, and exceptional client service delivery across diverse markets.\n\nHis leadership encompasses the development of market entry strategies, establishment of key stakeholder relationships, navigation of complex regulatory environments, and the cultivation of long-term client partnerships that drive sustainable growth.\n\nOusmane's proven track record in building robust business networks and his commitment to excellence have positioned our organization as a trusted partner throughout the West and Central African business landscape.",
    img: "/images/team/ousmane.jpg",
  },
  {
    name: "Akampurira Bronia",
    title: "Legal Adviser - Kampala, Uganda",
    desc: "A highly qualified legal professional specializing in comprehensive legal oversight and regulatory compliance across multiple jurisdictions and business sectors.\n\nWith extensive knowledge of both local Ugandan law and international regulatory frameworks, Bronia ensures that all our business operations, client services, and strategic initiatives are conducted in full accordance with applicable legal standards.\n\nHer expertise encompasses contract law, corporate governance, regulatory compliance, risk assessment, and the development of legal protocols that protect both our organization and our clients' interests.\n\nBronia's meticulous attention to detail and proactive approach to legal risk management has been essential in maintaining our company's impeccable reputation for ethical business practices and regulatory compliance throughout our operational territories.",
    img: "/images/team/bronia.jpg",
  },
  {
    name: "Babiker Abdelrahman Hanafy",
    title: "Senior Customer Manager - Kampala, Uganda",
    desc: "An experienced customer relationship specialist dedicated to delivering exceptional service experiences and fostering long-term strategic partnerships with our diverse client portfolio.\n\nWith a proven track record in client relationship management and service excellence, Babiker develops and implements comprehensive customer engagement strategies that ensure maximum client satisfaction and retention.\n\nHis responsibilities include managing high-value client accounts, coordinating complex service delivery processes, resolving challenging customer issues, and identifying opportunities for service enhancement and business expansion.\n\nBabiker's commitment to understanding each client's unique needs and his ability to deliver tailored solutions has consistently resulted in strong client loyalty and significant business growth through referrals and repeat engagements.",
    img: "/images/team/babiker.jpg",
  },
  {
    name: "Esra Abdalaziz Zakaria Adam",
    title: "Senior Customer Manager - Kampala, Uganda",
    desc: "A dedicated customer engagement leader who specializes in managing complex client relationships and ensuring service excellence across diverse industry sectors and market segments.\n\nWith comprehensive experience in customer service management and business development, Esra leads strategic customer engagement initiatives that drive satisfaction, loyalty, and long-term partnership development.\n\nHer expertise includes managing multi-tiered client portfolios, developing customized service solutions, coordinating cross-functional service delivery teams, and implementing quality assurance protocols that consistently exceed client expectations.\n\nEsra's exceptional communication skills and deep understanding of various industry requirements have made her instrumental in expanding our client base and maintaining our reputation for outstanding customer service throughout the East African market.",
    img: "/images/team/esra.jpg",
  },
  {
    name: "Mariia Koliadenko",
    title: "Employment Manager - Wrocław, Poland",
    desc: "A skilled international employment specialist who oversees comprehensive recruitment processes and work permit facilitation for our global workforce mobility initiatives.\n\nWith extensive expertise in European employment law, immigration procedures, and international recruitment standards, Mariia manages all aspects of employment placement from initial candidate screening to successful job placement and legal documentation.\n\nHer responsibilities encompass talent acquisition, visa and work permit processing, compliance with international labor standards, employer liaison, and ensuring ethical recruitment practices that protect both candidates and employers.\n\nMariia's thorough understanding of complex immigration requirements and her commitment to efficient, transparent processes have established our organization as a trusted partner for international employment solutions throughout Europe and beyond.",
    img: "/images/team/mariia.jpg",
  },
  {
    name: "Negash",
    title:
      "Trade Facilitator & Senior Customer Manager - Addis Abeba, Ethiopia",
    desc: "A versatile business professional who combines expertise in international trade facilitation with senior-level client relationship management to support seamless cross-border transactions and strategic partnerships.\n\nWith deep knowledge of African trade corridors, customs procedures, and international commerce regulations, Negash specializes in removing barriers to trade and creating efficient pathways for business growth across regional markets.\n\nHis dual role encompasses managing complex trade logistics, coordinating with customs authorities and regulatory bodies, developing trade finance solutions, and maintaining high-level client relationships that span multiple countries and industries.\n\nNegash's unique combination of trade expertise and customer management skills has been crucial in establishing our organization as a leading facilitator of African continental trade and a trusted partner for businesses seeking to expand their regional presence.",
    img: "/images/team/negash.jpg",
  },
  {
    name: "Wang TingTing",
    title: "Trade & Logistics Facilitator - Guangzhou, China",
    desc: "A strategic logistics professional who plays a vital role in coordinating complex international trade operations and enhancing operational efficiency across our East Asian business networks.\n\nWith comprehensive experience in Chinese market dynamics, international shipping protocols, and supply chain management, Wang TingTing ensures seamless coordination of trade logistics that connect Asian markets with our global operations.\n\nHer expertise includes managing shipping documentation, coordinating with freight forwarders and customs brokers, optimizing supply chain routes, ensuring compliance with international trade regulations, and developing strategic partnerships with key logistics providers.\n\nWang TingTing's deep understanding of East Asian business culture and her meticulous approach to logistics coordination have been instrumental in establishing efficient trade corridors that reduce costs, minimize delays, and enhance our clients' competitive advantage in international markets.",
    img: "/images/team/wang.jpg",
  },
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
