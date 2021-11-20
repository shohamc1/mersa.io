import React from "react";

const CompaniesPage = () => {
  return (
    <div class="flex flex-col justify-center items-center text-white mt-4">
      <div class="text-7xl font-header tracking-wider">
        Grow your company <span class="thickunderline">without dilution</span>
      </div>
      <span class="font-subheader text-4xl text-center">
        Convert your predictable monthly recurring revenues
      </span>
      <span class="font-subheader text-4xl text-center">
        into instant, upfront growth capital.
      </span>

      <div class="my-8 grid grid-flow-row grid-cols-2 space-x-4 w-full">
        <div class="flex flex-col mx-2">
          <span class="text-4xl font-bold">
            Skip your next round of fundraising.
          </span>
          <span class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-paleBlue to-turquoise">
            Retain your equity.
          </span>
          <span class="text-2xl mt-8">
            Unlock your most valuable asset, your recurring revenues, to fund
            your business.
          </span>
          <span class="text-2xl font-semibold mt-8">No debt. No dilution.</span>
          <span class="text-2xl font-extrabold"> Instant Financing.</span>
        </div>

        <div class="bg-white">Image</div>
      </div>

      <div class="my-8 grid grid-flow-row grid-cols-2 space-x-4 w-full">
        <div class="bg-white mr-2">Image</div>

        <div class="flex flex-col text-right mx-2">
          <span class="text-4xl font-bold">It's as easy as 1, 2, 3.</span>
          <span class="text-4xl font-bold">
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
          <span class="text-2xl mt-8">
            Forget spending months on raising funding.
          </span>
          <span class="text-2xl">
            Automatically receive your trading limit.
          </span>
          <span class="text-2xl">
            Get the capital you need in less than a day.
          </span>
        </div>
      </div>

      <div class="my-8 flex flex-col text-center">
        <span class="text-4xl font-bold">
          Get anywhere from 1 to 3 years worth of capital upfront.
        </span>
        <span class="text-2xl">
          Extend your runway. Increase your valuation
        </span>
      </div>

      <span class="my-4 font-header text-5xl text-center tracking-wider">
        Change the way you finance.
      </span>
      <div class="my-4 w-3/5 py-8 bg-white text-black font-subheader font-extrabold text-2xl rounded-lg text-center">
        Sign Up for Early Access
      </div>
    </div>
  );
};

export default CompaniesPage;
