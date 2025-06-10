"use client";

import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const FreeConsultaion = () => {
  return (
    <div className="py-16">
      <Container>
        {/* CTA Section */}
        <motion.div className="bg-blue rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-[40px] font-medium mb-4">
            Ready to Make the Move?
          </h2>

          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Our travel experts are ready to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              hideOnMobile={false}
              label={"Book a Free Consultation"}
              onClick={() =>
                window.open("https://survey.zohopublic.com/zs/uDCIrB", "_blank")
              }
              className="py-3.5 px-10 border-2 border-[#ffa704]"
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default FreeConsultaion;
