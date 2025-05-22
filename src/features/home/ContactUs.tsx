"use client";

import Container from "@/components/Container";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 py-16 mt-16">
      <Container>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="mb-6">
              <button className="px-6 py-2 bg-blue text-white rounded-[40px] text-sm font-medium">
                Contact us
              </button>
            </div>
            <h1 className="text-3xl md:text-4xl text-primary-black mb-4">
              Ready to get started?
            </h1>
            <p className="text-secondary-black text-lg">
              {
                "Whether you're traveling, relocating, or growing your business talk to us today."
              }
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-[500px] mx-auto"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-primary-black font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-6 py-3 border border-gray-200 rounded-[40px] text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-primary-black font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-3 border border-gray-200 rounded-[40px] text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-primary-black font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message..."
                rows={6}
                className="w-full px-6 py-3 border border-gray-200 rounded-[40px] text-base focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                required
              />
            </div>

            <div className="flex justify-center items-center gap-3">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue bg-gray-100 rounded-full"
                required
              />
              <label
                htmlFor="acceptTerms"
                className="text-primary-black text-sm"
              >
                <a href="/terms" className="underline hover:no-underline">
                  I accept the Terms
                </a>
              </label>
            </div>

            <div className="flex justify-center pt-4">
              <Button label="Submit" hideOnMobile={false} className="px-10" />
            </div>
          </form>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactUs;
