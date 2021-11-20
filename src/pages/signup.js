import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div class="flex w-screen h-full min-h-screen justify-center bg-backgroundGray">
      <Helmet>
        <title>Sign Up | mersa.io</title>
      </Helmet>
      <div class="absolute top-0 left-0 h-full w-screen min-h-screen opacity-30 bg-gradient-to-b from-signUpOlive to-backgroundGray"></div>
      <main class="w-3/4 z-10">
        <Header />
        <Footer />
      </main>
    </div>
  );
};

export default SignUp;
