import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Promotion from "../components/sections/Promotion";
import Feedback from "../components/sections/Feedback";
import Question from "../components/sections/Question";
import Choices from "../components/sections/Choices";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Choices />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Question />
      <Feedback />
      <Promotion />
    </>
  );
};

export default Home;
