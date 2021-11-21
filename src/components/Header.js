import React from "react";
import { Link } from "gatsby";

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
        <Link to="/companies" class="my-auto items-center no-underline">
          <div class="text-white text-lg my-auto">For Companies</div>
        </Link>
        <Link to="/investors" class="my-auto no-underline">
          <div class="text-white text-lg my-auto">For Investors</div>
        </Link>
        <Link to="/faq" class="my-auto no-underline">
          <div class="text-white text-lg my-auto">FAQs</div>
        </Link>
        <Link to="/signup">
          <div class="bg-white px-4 py-2 rounded-lg">Get Started</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
