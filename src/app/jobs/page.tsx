"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import jobs from "@/app/api/jobs.json";
import { Job } from "@/types/jobs";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import Link from "next/link";
import Container from "@/components/Container";

const categories = [
  "All",
  "Healthcare",
  "Engineering",
  "Hospitality",
  "IT",
  "Construction",
];

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="flex justify-between flex-col bg-white rounded-2xl p-6 pb-5 gap-4">
      <div>
        <div className="flex flex-col justify-between items-start mb-3 gap-1">
          <h3 className="text-xl font-medium text-gray-900">
            {job.title} - {job.location}
          </h3>
          <span className="px-2 py-1 bg-[#07567F10] text-blue text-[10px] font-semibold rounded">
            {job.type}
          </span>
        </div>

        <div className="space-y-2 text-md text-secondary-black mb-4 font-light">
          <p>
            <span className="font-medium">Salary:</span> {job.salary}
          </p>
          {job.schedule && (
            <p>
              <span className="font-medium">Schedule:</span> {job.schedule}
            </p>
          )}
          {job.duration && (
            <p>
              <span className="font-medium">Contract Duration:</span>{" "}
              {job.duration}
            </p>
          )}
          {job.processingTime && (
            <p>
              <span className="font-medium">Processing Time:</span>{" "}
              {job.processingTime}
            </p>
          )}
          {job.benefits && (
            <p>
              <span className="font-medium">Benefits:</span> {job.benefits}
            </p>
          )}
          {job.visaType && (
            <p>
              <span className="font-medium">Visa Type:</span> {job.visaType}
            </p>
          )}
        </div>
      </div>

      <Link
        href="/jobs/details"
        className="text-primary-orange font-light underline mt-auto"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [countryFilter, setCountryFilter] = useState("");

  // Filter jobs based on search and category
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;
      const matchesCountry =
        countryFilter === "" ||
        job.location.toLowerCase().includes(countryFilter.toLowerCase());

      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [searchTerm, selectedCategory, countryFilter]);

  return (
    <Container>
      <div className="min-h-screen">
        {/* Header */}
        <div className="">
          <div className="max-w-7xl mx-auto px-2 py-6">
            <div className="mb-8">
              <div className="flex flex-col justify-center items-center gap-8 mb-6">
                <SecondaryButton
                  label="Job Offers Abroad"
                  variant="secondary"
                />
                <Title>Find Your Dream Job</Title>
              </div>

              {/* Search Bar */}
              <div className="relative flex flex-col md:flex-row max-w-3xl mx-auto max-md:gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by job title, or skill"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 md:border-r-0 rounded-full md:rounded-tr-none  md:rounded-br-none focus:outline-0"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 md:border-l-0 rounded-full md:rounded-tl-none md:rounded-bl-none focus:outline-0"
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                  />
                </div>
                <button className="md:absolute top-[7px] right-[7px] bg-blue text-white text-sm font-medium py-2 max-md:py-4 px-4 rounded-full transition-colors cursor-pointer">
                  Search
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-orange-400 text-white"
                      : "text-secondary-black  border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-7xl mx-auto px-2 py-8">
          <h2 className="text-4xl font-medium text-gray-900 my-6 text-center">
            Available Job Listings
          </h2>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No jobs found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
