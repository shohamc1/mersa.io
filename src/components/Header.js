import React from "react";
import { Link } from "gatsby";
// import { Link } from "@reach/router";

import logo from "../images/mersa_no_bg.png";

const Header = () => {
  return (
    <div class="sticky top-0 z-20 flex flex-row font-subheader py-2 items-center backdrop-filter backdrop-blur">
      <div class="flex flex-row">
        {/* Left side */}
        <Link to="/">
          <img src={logo} class="h-8 w-auto" alt="Logo" />
        </Link>
      </div>
      <div class="flex flex-row ml-auto space-x-8 justify-center content-center">
        {/* Right side */}
        <Link
          to="/companies"
          className="my-auto items-center no-underline text-white text-lg"
        >
          For Companies
        </Link>
        <Link
          to="/investors"
          className="my-auto items-center no-underline text-white text-lg"
        >
          For Investors
        </Link>
        <Link
          to="/faq"
          className="my-auto items-center no-underline text-white text-lg"
        >
          FAQs
        </Link>
        <Link to="/signup">
          <div class="bg-white px-4 py-2 rounded-lg">Get Started</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
