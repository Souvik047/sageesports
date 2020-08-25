import React from "react";
import web from "./img/Main.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name1="Grow your Esports Carrer with"
        name2="We are the Team of the best Gamers in Gaming Society"
        name3=". We are Limited Edition."
        imgsrc={web}
        btname="Know More"
        visit="/service"
      />
    </>
  );
};

export default Home;
