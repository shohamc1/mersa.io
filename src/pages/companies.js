import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Companies = () => {
  return (
    <div class="flex w-screen h-screen justify-center bg-backgroundGray">
      <Helmet>
        <title>For companies | mersa.io</title>
      </Helmet>
      <div class="absolute top-0 left-0 h-screen w-screen opacity-30 bg-gradient-to-b from-companiesRed to-backgroundGray"></div>
      <main class="w-3/4 z-10">
        <Header />
        <Footer />
      </main>
    </div>
  );
};

export default Companies;
