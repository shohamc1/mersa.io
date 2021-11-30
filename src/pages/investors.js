import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InvestorsPage from "../components/investors/InvestorsPage";

const Investors = () => {
  return (
    <div class="flex w-full h-full justify-center bg-backgroundGray">
      <Helmet>
        <title>For investors | mersa.io</title>
        <meta name="theme-color" content="#382051"></meta>
      </Helmet>
      <div class="absolute top-0 left-0 h-full w-full opacity-30 bg-gradient-to-b from-investorsPurple to-backgroundGray"></div>
      <main class="w-full px-4 2xl:px-0 2xl:w-3/4 z-10">
        <Header />
        <InvestorsPage />
        <Footer />
      </main>
    </div>
  );
};

export default Investors;
