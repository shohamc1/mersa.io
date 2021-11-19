import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Index = () => {
  return (
    <div class="flex w-screen h-screen justify-center bg-backgroundGray">
      <Helmet>
        <title>mersa.io</title>
      </Helmet>
      <div class="absolute top-0 left-0 h-screen w-screen opacity-30 bg-gradient-to-b from-landingBlue to-backgroundGray"></div>
      <main class="w-3/4 z-10">
        <Header />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
