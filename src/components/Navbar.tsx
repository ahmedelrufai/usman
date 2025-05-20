"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./ui/Button";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Services list from the image
  const services = [
    { name: "Travel & Visa Application", href: "/services/travel-visa" },
    { name: "Job Offers Abroad", href: "/services/job-offers" },
    { name: "Real Estate Services", href: "/services/real-estate" },
    { name: "Relocation to Europe", href: "/services/relocation" },
    { name: "Car Rentals", href: "/services/car-rentals" },
    { name: "Ticketing", href: "/services/ticketing" },
    { name: "Trade Facilitation", href: "/services/trade" },
    { name: "Study services", href: "/services/study" },
    { name: "Logistics", href: "/services/logistics" },
  ];

  // Click away listener for services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className={`flex items-center`}>
          <Image
            src="/images/logo.png"
            alt="Arjun Global Services"
            width={134}
            height={67}
            className="object-contain"
            priority
            style={{ height: "auto", width: "100%" }}
          />
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-secondary-black" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-black" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 font-light">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-primary-black border-b-2 border-b-[#07567F]"
                : "text-secondary-black"
            } font-medium`}
          >
            Home
          </Link>

          <div className="relative" ref={servicesRef}>
            <button
              className="flex items-center text-secondary-black font-medium cursor-pointer"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-1 z-10">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-secondary-black hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/how-it-works"
            className={`${
              pathname === "/how-it-works"
                ? "text-primary-black border-b-2 border-b-[#07567F]"
                : "text-secondary-black"
            } font-medium`}
          >
            How It works
          </Link>

          <Link
            href="/faqs"
            className={`${
              pathname === "/faqs"
                ? "text-primary-black border-b-2 border-b-[#07567F]"
                : "text-secondary-black"
            } font-medium`}
          >
            FAQs
          </Link>

          <Link
            href="/become-an-agent"
            className={`${
              pathname === "/become-an-agent"
                ? "text-primary-black border-b-2 border-b-[#07567F]"
                : "text-secondary-black"
            } font-medium`}
          >
            Become an Agent
          </Link>
        </div>

        {/* Contact Us Button */}
        <Button
          label="Contact Us"
          onClick={() => router.push("/contact")}
          icon={<FaWhatsapp className="mr-2" size={20} />}
          hideOnMobile={true}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 mt-2 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-secondary-black font-medium py-2 border-b border-gray-100"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="pl-4 mt-2 mb-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block py-2 text-sm text-secondary-black"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/how-it-works"
              className="text-secondary-black font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It works
            </Link>

            <Link
              href="/faqs"
              className="text-secondary-black font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQs
            </Link>

            <Link
              href="/become-an-agent"
              className="text-secondary-black font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become an Agent
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center bg-primary-orange hover:bg-yellow-600 text-white px-6 py-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaWhatsapp className="mr-2" size={20} />
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
