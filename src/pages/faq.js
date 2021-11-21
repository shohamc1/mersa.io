import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQPage from "../components/faq/FAQPage";

const Companies = () => {
  return (
    <div class="flex w-full h-full min-h-screen justify-center bg-backgroundGray">
      <Helmet>
        <title>FAQs | mersa.io</title>
      </Helmet>
      <div class="absolute top-0 left-0 h-full w-full min-h-screen opacity-30 bg-gradient-to-b from-faqPink to-backgroundGray"></div>
      <main class="w-3/4 z-10">
        <Header />
        <FAQPage />
        <Footer />
      </main>
    </div>
  );
};

export default Companies;
