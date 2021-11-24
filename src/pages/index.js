import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../components/index/LandingPage";

const Index = () => {
  return (
    <div class="flex w-full h-full justify-center bg-backgroundGray">
      <Helmet>
        <title>mersa.io</title>
      </Helmet>
      <div class="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-b from-landingBlue to-backgroundGray"></div>
      <main class="w-full px-4 lg:px-0 lg:w-3/4 z-10">
        <Header />
        <LandingPage />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
