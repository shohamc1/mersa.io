import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "../components/Header";

const NotFoundPage = () => {
  useEffect(() => {
    setTimeout(function () {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <div class="flex w-full h-full justify-center bg-backgroundGray">
      <Helmet>
        <title>Not Found | mersa.io</title>
        <meta name="theme-color" content="#143A61"></meta>
      </Helmet>
      <div class="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-b from-landingBlue to-backgroundGray"></div>
      <main class="h-screen w-full px-4 2xl:px-0 2xl:w-3/4 z-10">
        <Header />
        <div class="flex flex-col justify-center items-center text-center mb-auto">
          <span class="text-5xl lg:text-7xl font-header tracking-wider text-white">
            Content not found
          </span>
          <Link
            to="/"
            class="font-subheader bg-white rounded-lg text-black text-2xl px-4 py-2 mt-2"
          >
            Go back home
          </Link>
          <span class="mt-4 text-white text-2xl font-thin">
            You will be redirected to the home page in 5 seconds.
          </span>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
