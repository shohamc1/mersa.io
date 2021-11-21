import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CompaniesPage from "../components/companies/CompaniesPage";

const Companies = () => {
  return (
    <div class="flex w-full h-full justify-center bg-backgroundGray">
      <Helmet>
        <title>For companies | mersa.io</title>
      </Helmet>
      <div class="absolute top-0 left-0 h-full w-full opacity-30 bg-gradient-to-b from-companiesRed to-backgroundGray"></div>
      <main class="w-3/4 z-10">
        <Header />
        <CompaniesPage />
        <Footer />
      </main>
    </div>
  );
};

export default Companies;
