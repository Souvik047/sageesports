import React from "react";
import web from "./img/Main.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name1="Play Like a Champion and Die Like a Legend. Other clan carries dust. "
        name2="Mess with the best, Die like the rest."
        name3="last forever."
        imgsrc={web}
        btname="Contact Us"
        visit="/contact"
      />
    </>
  );
};

export default About;
