import React from "react";
import Header from "./common/Header";
import Hero from "./Home/Hero";
import MobHeader from "./Home/MobHeader";
import Counter from "./Home/Counter";
import OffcanvasMobile from "./Home/OffcanvasMobile";
import ServiceDisplay from "./Home/ServiceDisplay";
import SpecialSkill from "./Home/SpecialSkill";

const Home = () => {
  return (
    <>
      <Header />
      <MobHeader />
      <OffcanvasMobile />
      <Hero />
      <ServiceDisplay />
      <SpecialSkill />
      <Counter />
    </>
  );
};

export default Home;
