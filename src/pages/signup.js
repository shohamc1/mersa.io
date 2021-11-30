import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUpPage from "../components/signup/SignUpPage";

const SignUp = () => {
  return (
    <div class="flex w-full h-full min-h-screen justify-center bg-backgroundGray">
      <Helmet>
        <title>Sign Up | mersa.io</title>
        <meta name="theme-color" content="#142728"></meta>
      </Helmet>
      <div class="absolute top-0 left-0 h-full w-full min-h-screen opacity-30 bg-gradient-to-b from-signUpOlive to-backgroundGray"></div>
      <main class="w-full px-4 2xl:px-0 2xl:w-3/4 z-10">
        <Header />
        <SignUpPage />
        <Footer />
      </main>
    </div>
  );
};

export default SignUp;
