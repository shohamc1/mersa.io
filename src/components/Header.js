import React from "react";
import { Link } from "gatsby";

import logo from "../images/mersa_no_bg.png";

const Header = () => {
  return (
    <div class="flex flex-row rounded font-subheader mt-2 items-center">
      <div class="flex flex-row">
        {/* Left side */}
        <Link to="/">
          <img src={logo} class="h-8 w-auto" alt="Logo" />
        </Link>
      </div>
      <div class="flex flex-row ml-auto space-x-8 justify-center content-center">
        {/* Right side */}
        <div class="text-white text-lg my-auto">For Companies</div>
        <div class="text-white text-lg my-auto">For Investors</div>
        <a href="#">
          <div class="bg-white px-4 py-2 rounded-lg">Get Started</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
