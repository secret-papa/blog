import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

function AboutPage() {
  return (
    <div className="about-container">
      <Helmet title={`About | ${config.siteTitle}`} />
      <About />
    </div>
  );
}

export default AboutPage;
