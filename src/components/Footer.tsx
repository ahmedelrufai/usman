"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaXTwitter, label: "Twitter", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  ];

  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
  ];

  const resourceLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Relocation Guide", href: "/relocation-guide" },
    { label: "Youtube", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookies Settings", href: "/cookies-settings" },
  ];

  return (
    <footer className="pt-16 pb-8">
      <Container>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Desktop Layout - 2 columns */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12">
            {/* Logo Section */}
            <div className="flex flex-col lg:col-span-1 justify-between">
              <div className="">
                <Image
                  src="/images/logo.png"
                  alt="Arjun Global Services"
                  width={134}
                  height={67}
                  className="object-contain"
                  priority
                  style={{ height: "auto" }}
                />
              </div>

              <div className="mb-6">
                <h3 className="text-secondary-black font-medium mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-2 text-secondary-black hover:text-blue transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex justify-between">
              {/* Company Links */}
              <div>
                <h3 className="text-secondary-black text-lg font-medium mb-6">
                  Company
                </h3>
                <ul className="space-y-3 text-sm">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-primary-black hover:text-blue transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-secondary-black text-lg font-medium mb-6">
                  Resources
                </h3>
                <ul className="space-y-3 text-sm">
                  {resourceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-primary-black hover:text-blue transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-secondary-black text-lg font-medium mb-6">
                  Contact Us
                </h3>
                <div className="space-y-3 text-primary-black text-sm">
                  <p>+256 757 940 605</p>
                  <p>support@Arjunservices.com</p>
                  <p>Office Hour: 8AM - 11PM</p>
                  <p>
                    1Suite G-19, Arua Park Mall,
                    <br />
                    Kampala City, Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Layout - 2 columns */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Logo */}
              <div>
                <Image
                  src="/images/logo.png"
                  alt="Arjun Global Services"
                  width={134}
                  height={67}
                  className="object-contain"
                  priority
                  style={{ height: "auto" }}
                />
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-secondary-black text-lg font-medium mb-6">
                  Company
                </h3>
                <ul className="space-y-3 text-sm">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-primary-black hover:text-blue transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-secondary-black text-lg font-medium mb-6">
                  Resources
                </h3>
                <ul className="space-y-3 text-sm">
                  {resourceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-primary-black hover:text-blue transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-secondary-black text-lg font-medium mb-6">
                  Contact Us
                </h3>
                <div className="space-y-3 text-primary-black text-sm">
                  <p>+256 757 940 605</p>
                  <p>support@Arjunservices.com</p>
                  <p>Office Hour: 8AM - 11PM</p>
                  <p>
                    1Suite G-19, Arua Park Mall,
                    <br />
                    Kampala City, Uganda
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-secondary-black text-lg font-medium mb-6">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 text-primary-black hover:text-blue transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Single column */}
          <div className="md:hidden space-y-8">
            {/* Logo */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Arjun Global Services"
                width={134}
                height={67}
                className="object-contain"
                priority
                style={{ height: "auto" }}
              />
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-secondary-black text-lg font-medium mb-6">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-black hover:text-blue transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-secondary-black text-lg font-medium mb-6">
                Resources
              </h3>
              <ul className="space-y-3 text-sm">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-black hover:text-blue transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-secondary-black text-lg font-medium mb-6">
                Contact Us
              </h3>
              <div className="space-y-3 text-primary-black text-sm">
                <p>+256 757 940 605</p>
                <p>support@Arjunservices.com</p>
                <p>Office Hour: 8AM - 11PM</p>
                <p>
                  1Suite G-19, Arua Park Mall,
                  <br />
                  Kampala City, Uganda
                </p>
              </div>
            </div>

            {/* Social Links - Mobile only */}
            <div>
              <h3 className="text-secondary-black text-lg font-medium mb-6">
                Follow Us
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 text-primary-black hover:text-blue transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="bg-primary-orange mb-8 p-[.5px] w-full"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary-black text-center md:text-left">
            Arjun Global Services Copyright - {new Date().getFullYear()}.
          </p>

          <div className="flex flex-wrap sm:gap-6 gap-2 justify-center md:justify-end">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="text-secondary-black hover:text-blue transition-colors underline text-sm"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-secondary-black">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
