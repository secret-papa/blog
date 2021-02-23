import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import config from "../../data/SiteConfig";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="ko" />
      </Helmet>
      <Header />
      {children}
    </div>
  );
}
