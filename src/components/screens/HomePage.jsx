import React from "react";
import HeroBanner from "./HeroBanner";
import CustomCarousel from "../carousel/CustomCarousel";
import CategorySection from "./CategorySection";

function HomePage() {
  return (
    <>
      <HeroBanner />
      <CustomCarousel />
      <CategorySection />
    </>
  );
}

export default HomePage;
