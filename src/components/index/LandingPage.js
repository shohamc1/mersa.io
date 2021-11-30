import React from "react";
import { Link } from "gatsby";

import LandingGraphic from "../../images/landing_graphic.webp";
import LandingConnect from "../../images/landing_connect.webp";
import LandingSelect from "../../images/landing_select.webp";
import LandingCollect from "../../images/landing_collect.webp";

const LandingPage = () => {
  return (
    <div class="flex flex-col justify-center items-center text-white mt-4">
      <div class="text-5xl text-center lg:text-7xl font-header tracking-wider">
        Financing{" "}
        <span class="w-min md:w-max lg:w-max thickunderline">
          without Fundraising
        </span>
      </div>
      <span class="text-xl lg:text-2xl text-center">
        Mersa empowers founders to grow their businesses with their revenues.
      </span>
      <span class="text-xl lg:text-2xl text-center">
        Retain a larger share of your company at exit.
      </span>

      <div class="flex flex-col my-4 space-y-2 text-center">
        <img
          src={LandingGraphic}
          alt="How it works"
          class="lg:w-2/3 self-center rounded-2xl"
        />
      </div>

      <span class="text-xl lg:text-2xl text-center tracking-wide">
        Mersa allows you to turn your predictable recurring revenues into years
        of upfront capital in less than 24 hours.
      </span>

      <span class="text-xl lg:text-2xl mt-4">No dilution. No debt.</span>
      <div class="text-xl lg:text-2xl mb-4 font-semibold">
        Instant Financing.
      </div>

      <div class="mb-4 grid grid-flow-row lg:grid-flow-col grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-1 lg:space-y-0 lg:space-x-4">
        <Link to="/signup">
          <div class="py-4 px-2 lg:py-8 lg:px-12 bg-white text-black font-subheader font-extrabold lg:text-2xl rounded-lg text-center">
            Sign Up for Early Access
          </div>
        </Link>

        <a href="/">
          <div class="py-4 px-2 lg:py-8 lg:px-12 bg-buttonGray text-white font-subheader font-extrabold lg:text-2xl rounded-lg text-center">
            Contact Us
          </div>
        </a>
      </div>

      {/* Connect */}
      <div class="lg:h-sscreen flex flex-col justify-center items-center">
        <div class="mt-4 font-header bg-gradient-to-r from-connectDarkBlue to-connectLightBlue w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center rounded-full text-2xl lg:text-4xl">
          1
        </div>
        <span class="font-extrabold text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-connectDarkBlue to-connectLightBlue">
          Connect.
        </span>

        <div class="my-4 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:space-x-4">
          <div class="text-2xl lg:text-4xl text-center lg:text-left p-4 lg:p-12 self-center">
            Connect your existing systems to Mersa. It only takes{" "}
            <b>5 minutes</b>.
          </div>
          <div class="lg:p-8">
            <img
              src={LandingConnect}
              alt="How it works"
              class="rounded-2xl self-center"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        {/* Select */}
        <div class="mt-4 font-header bg-gradient-to-r from-selectPurple to-selectRed w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center rounded-full text-2xl lg:text-4xl">
          2
        </div>
        <span class="font-extrabold text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-selectPurple to-selectRed">
          Select.
        </span>

        <div class="my-4 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:space-x-4">
          <div class="lg:p-8">
            <img
              src={LandingSelect}
              alt="How it works"
              class="rounded-2xl self-center"
            />
          </div>
          <div class="col-start-1 lg:col-start-auto text-2xl lg:text-4xl text-center lg:text-right p-4 lg:p-12 self-center">
            Select the contracts you would like to sell as bonds to investors.
          </div>
        </div>
      </div>

      <div class="lg:h-sscreen flex flex-col justify-center items-center">
        {/* Collect */}
        <div class="mt-4 font-header bg-gradient-to-r from-collectOrange to-collectYellow w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center rounded-full  text-2xl lg:text-4xl">
          3
        </div>
        <span class="font-extrabold text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-collectOrange to-collectYellow">
          Collect.
        </span>

        <div class="my-4 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:space-x-4">
          <div class="text-2xl lg:text-4xl p-4 lg:p-12 text-center lg:text-left self-center">
            Collect your upfront capital. It's as if each contract paid you
            upfront for 1-3 years worth of subscriptions.
          </div>
          <div class="lg:p-8">
            <img
              src={LandingCollect}
              alt="How it works"
              class="rounded-2xl self-center"
            />
          </div>
        </div>
      </div>

      <span class="my-4 font-header text-3xl lg:text-5xl text-center tracking-wider">
        Learn More
      </span>

      <div class="mb-4 grid grid-flow-row lg:grid-flow-col grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-2 lg:space-y-0 lg:space-x-4">
        <Link to="/companies">
          <div class="py-8 px-12 bg-buttonGray text-white font-subheader text-2xl rounded-lg text-center">
            <svg
              width="64"
              height="64"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              class="mx-auto"
            >
              <path d="M21 22h2v2h-22v-2h2v-22h18v22zm-10-3h-2v4h2v-4zm4 0h-2v4h2v-4zm4-17h-14v20h2v-5h10v5h2v-20zm-12 11h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
            </svg>
            Companies
          </div>
        </Link>

        <Link to="/investors">
          <div class="py-8 px-12 bg-buttonGray text-white font-subheader text-2xl rounded-lg text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="white"
              viewBox="0 0 24 24"
              class="mx-auto"
            >
              <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-19 5.78c0-.431.349-.78.78-.78h.428v1.125h-1.208v-.345zm0 .764h1.208v.968h-1.208v-.968zm0 1.388h1.208v1.068h-.428c-.431 0-.78-.349-.78-.78v-.288zm3 5.068h-3v-1h3v1zm1-4.78c0 .431-.349.78-.78.78h-.429v-1.068h1.209v.288zm0-.708h-1.209v-.968h1.209v.968zm0-1.387h-1.629v2.875h-.743v-4h1.592c.431 0 .78.349.78.78v.345zm4 6.875h-3v-1h3v1zm1-6.5c0-1.381 1.119-2.5 2.5-2.5.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.327 1.571.857 2.123-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5zm4 6.5h-3v-1h3v1zm5 0h-3v-1h3v1zm-2.5-4c-1.38 0-2.5-1.119-2.5-2.5s1.12-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z" />
            </svg>
            Investors
          </div>
        </Link>
      </div>

      <span class="my-4 font-header text-4xl lg:text-5xl text-center tracking-wider">
        Ready to get funded?
      </span>

      <Link
        to="/signup"
        class="lg:my-4 lg:w-3/5 py-8 bg-white text-black font-subheader font-extrabold text-2xl rounded-lg text-center"
      >
        <div>Sign Up for Early Access</div>
      </Link>
    </div>
  );
};

export default LandingPage;
