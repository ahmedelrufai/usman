import AboutUs from "@/features/home/AboutUs";
import ContactUs from "@/features/home/ContactUs";
import FAQs from "@/features/home/FAQs";
import HeroSection from "@/features/home/HeroSection";
import Locations from "@/features/home/Locations";
import News from "@/features/home/News";
import Services from "@/features/home/Services";
import Testimonials from "@/features/home/Testimonials";
import Trusts from "@/features/home/Trust";
import WhyUs from "@/features/home/WhyUs";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <Locations />
      <AboutUs />
      <Trusts />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQs />
      <ContactUs />
      <News />
    </div>
  );
};

export default Home;
