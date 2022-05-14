import React from "react";
import Header from "./common/Header";
import Hero from "./Home/Hero";
import MobHeader from "./Home/MobHeader";
import OffcanvasMobile from "./Home/OffcanvasMobile";
import ServiceDisplay from "./Home/ServiceDisplay";

const Home = () => {
  return (
    <>
      <Header />
      <MobHeader />
      <OffcanvasMobile />
      <Hero />
      <ServiceDisplay />
    </>
  );
};

export default Home;
