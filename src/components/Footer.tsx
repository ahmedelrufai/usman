"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookies Settings", href: "/cookies-settings" },
  ];

  return (
    <footer className="pt-16 pb-8">
      <Container>
        {/* Background wrapper inside the container */}
        <div className="bg-[#08567f] text-white rounded-3xl p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo_short.png"
                  alt="Arjun Global Services"
                  width={134}
                  height={67}
                  className="object-contain mb-4"
                  priority
                  style={{ height: "auto" }}
                />
              </div>

              {/* Info/Call/Address wrapper */}
              <div className="flex flex-col md:flex-row gap-8 flex-1">
                {/* Info */}
                <div className="border-l border-[#ffa705]/60 pl-4 flex-1">
                  <p className="font-semibold text-[#ffa705] mb-2">Info</p>
                  <p className="mb-1">www.arjunservices.com</p>
                  <p>info@arjunservices.com</p>
                </div>

                {/* Call */}
                <div className="border-l border-[#ffa705]/60 pl-4 flex-1">
                  <p className="font-semibold text-[#ffa705] mb-2">Call</p>
                  <p>+256 756 97 9946</p>
                  <p>+234 808 519 9777</p>
                </div>

                {/* Address */}
                <div className="border-l border-[#ffa705]/60 pl-4 flex-1">
                  <p className="font-semibold text-[#ffa705] mb-2">Address</p>
                  <p>A06 Flomax Plaza | Gudu | Abuja | FCT | Nigeria</p>
                  <p>G-19 Arua Park Mall | Central Town | Kampala | Uganda</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="md:bg-[#ffa705]/60  mb-8 h-[1px] w-full"></div>

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Arjun Global Services. All rights reserved.
            </p>

            <div className="flex flex-wrap sm:gap-6 gap-2 justify-center md:justify-end">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#ffa705] transition-colors underline text-sm"
                  >
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white text-sm">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
