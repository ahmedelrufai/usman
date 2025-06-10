"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./ui/Button";
import { redirectToWhatsApp } from "@/helper";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Services list
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close services dropdown if clicked outside desktop services
      if (
        servicesRef.current &&
        !servicesRef.current.contains(target) &&
        !isMobileMenuOpen
      ) {
        setIsServicesOpen(false);
      }

      // Close mobile menu if clicked outside mobile menu area
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuButton = document.getElementById("mobile-menu-button");

      if (
        isMobileMenuOpen &&
        mobileMenu &&
        mobileMenuButton &&
        !mobileMenu.contains(target) &&
        !mobileMenuButton.contains(target)
      ) {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Handle mobile navigation with router.push for better reliability
  const handleMobileNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    router.push(href);
  };

  return (
    <nav className="w-full py-10 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Arjun Global Services"
            width={134}
            height={67}
            className="object-contain"
            priority
            style={{ height: "auto", width: "100%" }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-secondary-black" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-black" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
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
              className={`${
                pathname.split("/")[1] === "services"
                  ? "text-primary-black border-b-2 border-b-[#07567F]"
                  : "text-secondary-black"
              } flex items-center text-secondary-black font-medium cursor-pointer`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isServicesOpen && (
              <div className="flex justify-between overflow-hidden absolute top-full left-0 mt-1  w-[440px] bg-white shadow-lg rounded-2xl z-20">
                <div className="flex-2 p-4">
                  <h1 className="text-lg">Arjun Global</h1>
                  <p className="text-sm text-secondary-black">
                    Get to know us better 😊, see how you can be at your service
                  </p>
                </div>
                <div className="flex-3 bg-[#F7F7F7] py-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-secondary-black hover:bg-[#fff]"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
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
            href="/about-us"
            className={`${
              pathname === "/aboout-us"
                ? "text-primary-black border-b-2 border-b-[#07567F]"
                : "text-secondary-black"
            } font-medium`}
          >
            About us
          </Link>

          <button
            onClick={() =>
              window.open("https://survey.zohopublic.com/zs/uDCIrB", "_blank")
            }
            className={`${
              pathname === "/become-an-agent"
                ? "text-primary-black border-b-2 border-b-[#07567F]"
                : "text-secondary-black"
            } font-medium`}
          >
            Become an Agent
          </button>
        </div>

        {/* Contact Us Button */}
        <Button
          label="Contact Us"
          onClick={redirectToWhatsApp}
          icon={<FaWhatsapp className="mr-2" size={20} />}
          hideOnMobile={true}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 mt-2 shadow-lg rounded-lg">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleMobileNavigation("/")}
              className="text-left text-gray-800 font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors"
            >
              Home
            </button>

            <div>
              <button
                className="flex items-center justify-between w-full text-secondary-black font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transform transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Services Submenu */}
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleMobileNavigation(service.href)}
                      className="block w-full text-left py-2 px-3 text-sm text-secondary-black hover:bg-gray-50 rounded transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleMobileNavigation("/how-it-works")}
              className="text-left text-secondary-black font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors"
            >
              How It works
            </button>

            <button
              onClick={() => handleMobileNavigation("/faqs")}
              className="text-left text-secondary-black font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors"
            >
              FAQs
            </button>

            <button
              onClick={() => handleMobileNavigation("/about-us")}
              className="text-left text-secondary-black font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors"
            >
              About us
            </button>

            <button
              onClick={() =>
                window.open("https://survey.zohopublic.com/zs/uDCIrB", "_blank")
              }
              className="text-left text-secondary-black font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded transition-colors"
            >
              Become an Agent
            </button>

            <button
              onClick={() => handleMobileNavigation("/contact")}
              className="flex items-center justify-center bg-primary-orange hover:bg-yellow-600 text-white px-6 py-3 rounded-full mt-4 transition-colors"
            >
              <FaWhatsapp className="mr-2" size={20} />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
