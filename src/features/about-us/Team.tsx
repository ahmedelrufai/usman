import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { Users } from "lucide-react";
import React, { useState } from "react";
import TeamModal from "./TeamModal";

const Team = () => {
  const [showTeamModal, setShowTeamModal] = useState(false);

  return (
    <Container>
      <div className="text-center mb-12 mx-auto mt-16 sm:mt-30">
        <h2 className="text-4xl font-medium text-primary-black mb-4">
          Our Management Team
        </h2>
        <p className="text-xl text-secondary-black max-w-4xl mx-auto font-light">
          Our leadership team is composed of seasoned professionals with deep
          expertise across operations, legal advisory, customer relations,
          employment services, trade facilitation, and logistics. United by a
          shared commitment to integrity, excellence, and global connectivity.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Button
          hideOnMobile={false}
          label="See Our Team"
          onClick={() => {
            setShowTeamModal(true);
          }}
          className="py-3.5 px-10 border-2 border-[#ffa704]"
        />
      </div>

      {showTeamModal && <TeamModal onClose={() => setShowTeamModal(false)} />}
    </Container>
  );
};

export default Team;
