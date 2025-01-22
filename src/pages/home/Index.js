import React from "react";
import Banner from "./Banner";
import BannerBottom from "./BannerBottom";
import Slider from "./Slider";
import Portfolio from "./Portfolio";
import BBox from "../../shared/BBox";
import theme from "../../theme/Theme";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Resume from "./Resume";

const Home = () => {
  return (
    <>
      <BBox css={{ color: theme.colors.main }}>
        <Banner />
        <BannerBottom />
        <Slider />
        <Portfolio />
        <AboutMe />
        <Services />
        <Resume />
      </BBox>
    </>
  );
};

export default Home;
