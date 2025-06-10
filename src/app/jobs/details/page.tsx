import {
  Briefcase,
  Calendar,
  Clock,
  Copy,
  Facebook,
  GraduationCap,
  Link2,
  Linkedin,
  MapPin,
  Share,
  Target,
  Twitter,
} from "lucide-react";
import React from "react";
import jobs from "@/app/api/jobs.json";
import { JobCard } from "../page";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const JobDetailPage = () => {
  const jobData = {
    title: "Hotel Maid",
    location: "BELGRADE",
    type: "FULL-TIME",
    salary: "€11,500 – €12,500",
    period: "Yearly salary",
    schedule: "Monday-Friday (Day shifts), Weekend availability required",
    benefits:
      "Free meals, free accommodation, company pension, employee discounts",
    description:
      "Work in a 4*/5* hotel located in the historical center of Belgrade, supporting a professional housekeeping team.",
    responsibilities: [
      "Cleaning rooms and public areas",
      "Deep cleaning and restocking",
      "Returning room service items",
      "Reporting maintenance issues",
    ],
    additionalInfo:
      "Guestline software experience is a plus (training provided).",
    jobPosted: "14 April, 2025",
    jobExpire: "14 Jun, 2025",
    jobLevel: "Entry Level",
    experience: "£50k-80k/month",
    education: "Graduation",
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Find Job", href: "/jobs" },
    { label: "Hotel maid", href: "/jobs/hotel-maid" },
    { label: "Job Details", href: "#", active: true },
  ];

  return (
    <Container>
      <div className="min-h-screen">
        {/* Header */}
        <div className="bg-white  rounded-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-primary-black">
                Job Details
              </h1>

              {/* Breadcrumbs */}
              <nav className="flex items-center space-x-2 text-sm text-secondary-black">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span>/</span>}
                    <span
                      className={
                        crumb.active
                          ? "text-primary-black font-medium"
                          : "hover:text-gray-700"
                      }
                    >
                      {crumb.label}
                    </span>
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-8">
          <div className="bg-white rounded-lg p-6">
            {/* Main Content */}
            {/* Job Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <h1 className="text-2xl font-medium text-primary-black mb-2">
                  {jobData.title} – {jobData.location}
                </h1>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                  {jobData.type}
                </span>
              </div>
              <Button
                label="Apply Now"
                variant="primary"
                className="w-[200px] justify-center"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <div className="mb-6">
                  {/* Job Description Section */}
                  <div className="mb-8">
                    <h2 className="text-xl font-medium text-primary-black mb-4">
                      Job Description
                    </h2>

                    <div className="space-y-4 text-secondary-black font-light">
                      <p>
                        <span className="font-medium">Schedule:</span>{" "}
                        {jobData.schedule}
                      </p>
                      <p>
                        <span className="font-medium">Benefits:</span>{" "}
                        {jobData.benefits}
                      </p>

                      <div>
                        <p className="font-medium mb-2">Description:</p>
                        <p>{jobData.description}</p>
                      </div>

                      <div>
                        <p className="font-medium mb-2">Responsibilities:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          {jobData.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index}>{responsibility}</li>
                            )
                          )}
                        </ul>
                      </div>

                      <p>{jobData.additionalInfo}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 item-center">
                {/* Salary Card */}

                <div className="flex flex-row justify-center gap-4 space-y-6 border border-[#D9D9D9] rounded-[20px] items-center">
                  <div className="p-6 mb-0 jus">
                    <div className="text-center">
                      <h3 className="text-sm text-secondary-black mb-1">
                        Salary (EUR)
                      </h3>
                      <p className="text-2xl font-medium text-primary-black mb-1">
                        {jobData.salary}
                      </p>
                      <p className="text-sm text-secondary-black">
                        {jobData.period}
                      </p>
                    </div>
                  </div>
                  <div className="my-auto h-[120px] w-[1px] bg-[#D9D9D9]" />
                  {/* Job Location Card */}
                  <div className="p-6 mb-0 jus">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                        <MapPin className="w-6 h-6 text-blue" />
                      </div>
                      <h3 className="text-primary-black mb-1">Job Location</h3>
                      <p className="font-medium text-secondary-black">
                        Belgrade, Serbia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Job Overview Card */}
                <div className="border p-6 border-[#D9D9D9] rounded-[20px]">
                  <h3 className="text-lg font-medium text-primary-black mb-4">
                    Job Overview
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-start space-x-3 gap-2">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/jobs/calendar.png"
                          width={24}
                          height={24}
                          alt="image"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-secondary-black uppercase tracking-wide">
                          JOB POSTED
                        </p>
                        <p className="text-sm font-medium text-primary-black">
                          {jobData.jobPosted}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start space-x-3 gap-2">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/jobs/alarm.png"
                          width={24}
                          height={24}
                          alt="image"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-secondary-black uppercase tracking-wide">
                          JOB EXPIRE IN
                        </p>
                        <p className="text-sm font-medium text-primary-black">
                          {jobData.jobExpire}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start space-x-3 gap-2">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/jobs/stack.png"
                          width={24}
                          height={24}
                          alt="image"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-secondary-black uppercase tracking-wide">
                          JOB LEVEL
                        </p>
                        <p className="text-sm font-medium text-primary-black">
                          {jobData.jobLevel}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start space-x-3 gap-2">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/jobs/wallet.png"
                          width={24}
                          height={24}
                          alt="image"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-secondary-black uppercase tracking-wide">
                          EXPERIENCE
                        </p>
                        <p className="text-sm font-medium text-primary-black">
                          {jobData.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start space-x-3 gap-2">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/jobs/book.png"
                          width={24}
                          height={24}
                          alt="image"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-secondary-black uppercase tracking-wide">
                          EDUCATION
                        </p>
                        <p className="text-sm font-medium text-primary-black">
                          {jobData.education}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Share Job Card */}
                  <div className="mt-12">
                    <h3 className="text-lg font-medium text-primary-black mb-4">
                      Share this job:
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg transition-colors">
                        <Link2 className="w-4 h-4 text-primary-orange" />
                        <span className="text-sm text-primary-orange">
                          Copy Links
                        </span>
                      </button>

                      <button className="p-2 text-primary-orange bg-gray-50 rounded-lg transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </button>

                      <button className="p-2 text-primary-orange bg-gray-50 rounded-lg transition-colors">
                        <FaFacebook className="w-6 h-6" />
                      </button>

                      <button className="p-2 text-primary-orange bg-gray-50 rounded-lg transition-colors">
                        <FaTwitter className="w-6 h-6" />
                      </button>

                      <button className="p-2 text-primary-orange bg-gray-50 rounded-lg transition-colors">
                        <FaWhatsapp className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-4">Related Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.slice(0, 3).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobDetailPage;
