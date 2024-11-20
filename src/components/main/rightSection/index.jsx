import React from "react";
import AboutMe from "./aboutme";
import Certificates from "./Certificates";
import Projects from "./projects";

const RightSection = () => {
  return (
    <section className="w-1/2 p-4">
      <AboutMe />
      <Certificates/>
      <Projects/>
    </section>
  );
};
export default RightSection;
