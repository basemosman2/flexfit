import { Footer, HeaderBanner, WhoWeAre } from "@/components";
import { TrainersSection } from "@/components/sections";
import React from "react";

const About = () => {
  return (
    <>
      <HeaderBanner title="About Us" />
      <section className="px-7 py-28 lg:px-24 bg-[url('/images/background.jpg')] relative z-0 bg-cover bg-center">
        <WhoWeAre/>
      </section>
      <TrainersSection/>
      <Footer/>
    </>
  );
};

export default About;
