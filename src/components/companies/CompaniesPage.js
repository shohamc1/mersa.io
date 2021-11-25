import React from "react";
import { Link } from "gatsby";

const CompaniesPage = () => {
  return (
    <div class="flex flex-col justify-center items-center text-white mt-4">
      <div class="text-5xl lg:text-7xl font-header tracking-wider text-center">
        Grow your company{" "}
        <span class="w-auto md:w-max lg:w-max thickunderline">
          without dilution
        </span>
      </div>
      <span class="font-subheader text-xl lg:text-4xl text-center">
        Convert your predictable monthly recurring revenues
      </span>
      <span class="font-subheader text-xl lg:text-4xl text-center">
        into instant, upfront growth capital.
      </span>

      <div class="my-8 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-1 lg:space-y-0 lg:space-x-4 w-full">
        <div class="flex flex-col mx-2">
          <span class="text-2xl lg:text-4xl font-bold">
            Skip your next round of fundraising.
          </span>
          <span class="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-paleBlue to-turquoise">
            Retain your equity.
          </span>
          <span class="text-lg lg:text-2xl mt-4 lg:mt-8">
            Unlock your most valuable asset, your recurring revenues, to fund
            your business.
          </span>
          <span class="text-lg lg:text-2xl font-semibold mt-4 lg:mt-8">
            No debt. No dilution.
          </span>
          <span class="text-lg lg:text-2xl font-extrabold">
            {" "}
            Instant Financing.
          </span>
        </div>

        <div class="bg-white">Image</div>
      </div>

      <div class="my-8 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-1 lg:space-y-0 lg:space-x-4 w-full">
        <div class="bg-white mr-2">Image</div>

        <div class="col-start-1 lg:col-start-auto flex flex-col lg:text-right mx-2">
          <span class="text-2xl lg:text-4xl font-bold">
            It's as easy as 1, 2, 3.
          </span>
          <span class="text-2xl lg:text-4xl font-bold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-connectDarkBlue to-connectLightBlue mr-1">
              Connect.
            </span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-selectPurple to-selectRed mr-1">
              Select.
            </span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-collectOrange to-collectYellow">
              Collect.
            </span>
          </span>
          <span class="text-lg lg:text-2xl mt-4 lg:mt-8">
            Forget spending months on raising funding.
          </span>
          <span class="text-lg lg:text-2xl">
            Automatically receive your trading limit.
          </span>
          <span class="text-lg lg:text-2xl">
            Get the capital you need in less than a day.
          </span>
        </div>
      </div>

      <div class="my-8 flex flex-col text-center">
        <span class="text-2xl lg:text-4xl font-bold">
          Get anywhere from 1 to 3 years worth of capital upfront.
        </span>
        <span class="text-lg lg:text-2xl">
          Extend your runway. Increase your valuation
        </span>
      </div>

      <span class="my-4 font-header text-4xl lg:text-5xl text-center tracking-wider">
        Change the way you finance.
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

export default CompaniesPage;
