// Job categories available in the system
export type JobCategory =
  | "Healthcare"
  | "Engineering"
  | "Hospitality"
  | "IT"
  | "Construction";

// Employment types
export type JobType =
  | "FULL-TIME"
  | "PART-TIME"
  | "CONTRACT"
  | "TEMPORARY"
  | "INTERNSHIP";

// Visa types for international jobs
export type VisaType =
  | "VISA D TYPE (THE DUR...)"
  | "180 DAYS Visa D TYPE..."
  | "Initial Work visa One year"
  | "Work Permit Required"
  | "EU Citizenship Required";

// Main job interface
export interface Job {
  id: number;
  title: string;
  location: string;
  category: JobCategory;
  type: JobType;
  salary: string;
  schedule?: string;
  benefits?: string;
  duration?: string;
  processingTime?: string;
  jobType?: string;
  visaType?: VisaType;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
  companyName?: string;
  description?: string;
  requirements?: string[];
  responsibilities?: string[];
  applicationDeadline?: string;
}

// Job search and filter interfaces
export interface JobFilters {
  searchTerm: string;
  category: JobCategory | "All";
  location: string;
  jobType?: JobType;
  salaryRange?: {
    min: number;
    max: number;
  };
  featured?: boolean;
}

// Job search results
export interface JobSearchResult {
  jobs: Job[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Job application interface
export interface JobApplication {
  id: string;
  jobId: number;
  applicantName: string;
  applicantEmail: string;
  applicantPhone?: string;
  resume?: File | string;
  coverLetter?: string;
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
}

export type ApplicationStatus =
  | "pending"
  | "reviewed"
  | "interview_scheduled"
  | "accepted"
  | "rejected"
  | "withdrawn";

// Company information
export interface Company {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  website?: string;
  location: string;
  size?: CompanySize;
  industry?: string;
}

export type CompanySize =
  | "1-10"
  | "11-50"
  | "51-200"
  | "201-500"
  | "501-1000"
  | "1000+";

// Salary information
export interface SalaryInfo {
  currency: "EUR" | "USD" | "PLN" | "GBP";
  amount: {
    min?: number;
    max?: number;
  };
  period: "hour" | "month" | "year";
  benefits?: string[];
}

// Location details
export interface JobLocation {
  country: string;
  city?: string;
  region?: string;
  remote?: boolean;
  hybrid?: boolean;
}
