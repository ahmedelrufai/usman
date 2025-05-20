import HeroSection from "@/features/home/HeroSection";
import Locations from "@/features/home/Locations";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <Locations />
    </div>
  );
};

export default Home;
