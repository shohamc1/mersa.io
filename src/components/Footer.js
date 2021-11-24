import React from "react";

import logo from "../images/mersa_no_bg.png";

const Footer = () => {
  return (
    <div class="mt-4 mb-8">
      <hr />
      <div class="flex flex-col lg:flex-row mt-4">
        {/* Content */}
        <div class="mb-4 lg:mb-0 lg:ml-16 flex flex-col justify-center items-center">
          {/* Left side */}
          <img src={logo} class="h-8 w-auto" alt="Logo" />
          <span class="text-white font-header text-base tracking-wider">
            Financing without Fundraising
          </span>
          <div class="flex flex-row space-x-4">
            <a href="https://www.twitter.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="mx-auto lg:ml-auto lg:mr-16 flex flex-row text-white space-x-16">
          {/* Right side */}
          <div class="flex flex-col">
            {/* Products */}
            <span class="font-bold">Products</span>

            <a href="/companies">
              <span class="mt-1 font-light">For companies</span>
            </a>
            <a href="/investors">
              <span class="font-light">For investors</span>
            </a>
            <a href="/faq">
              <span class="font-light">FAQs</span>
            </a>
          </div>

          <div class="flex flex-col">
            {/* Company */}
            <span class="font-bold">Company</span>

            <span class="mt-1 font-light">About Us</span>
            <span class="font-light">Contact Us</span>
            <span class="font-light">Blog</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
