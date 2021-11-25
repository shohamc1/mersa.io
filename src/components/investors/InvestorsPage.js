import React from "react";
import { Link } from "gatsby";

const InvestorsPage = () => {
  return (
    <div class="flex flex-col justify-center items-center text-white mt-4">
      <div class="text-5xl lg:text-7xl text-center font-header tracking-wider">
        Invest in the{" "}
        <span class="w-auto md:w-max lg:w-max thickunderline">
          most reliable
        </span>{" "}
        asset class
      </div>
      <span class="font-subheader text-xl lg:text-4xl text-center">
        Invest in recurring revenue contracts
      </span>
      <span class="font-subheader text-xl lg:text-4xl text-center">
        with monthly returns.
      </span>

      <div class="my-8">
        <div class="text-center">
          <span class="text-2xl lg:text-4xl font-bold">
            Get access to the assets of the{" "}
          </span>
          <span class="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-paleYellow to-paleOrange">
            hottest companies.
          </span>
        </div>
        <div class="flex flex-col text-center text-lg lg:text-2xl">
          <span>Select which companies' contracts you want to buy.</span>
          <span>
            Place your competitive bid and collect your monthly return on
            investment.
          </span>
        </div>
      </div>

      <div class="my-8 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-1 lg:space-y-0 lg:space-x-4 w-full">
        <div class="flex flex-col mx-2 text-center lg:text-left">
          <div>
            <span class="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-connectDarkBlue to-connectLightBlue">
              Connect.
            </span>
          </div>
          <span class="text-lg lg:text-2xl mt-4 lg:mt-8">
            Connect your bank account.
          </span>
          <span class="text-lg lg:text-2xl">
            Just like any other brokerage account.
          </span>
        </div>

        <div class="bg-white">Image</div>
      </div>

      <div class="my-8 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-1 lg:space-y-0 lg:space-x-4 w-full">
        <div class="bg-white">Image</div>

        <div class="col-start-1 lg:col-start-auto flex flex-col mx-2 text-center lg:text-right">
          <div>
            <span class="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-selectPurple to-selectRed">
              Select.
            </span>
          </div>
          <span class="text-lg lg:text-2xl mt-4 lg:mt-8">
            Select which contracts you want to buy.
          </span>
          <span class="text-lg lg:text-2xl">Place your bid.</span>
        </div>
      </div>

      <div class="my-8 grid grid-flow-col lg:grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 space-y-1 lg:space-y-0 lg:space-x-4 w-full">
        <div class="flex flex-col mx-2 text-center lg:text-left">
          <div>
            <span class="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-collectOrange to-collectYellow">
              Collect.
            </span>
          </div>
          <span class="text-lg lg:text-2xl mt-4 lg:mt-8">
            Collect your monthly return.
          </span>
          <span class="text-lg lg:text-2xl mt-1">
            We'll make sure the monthly payouts hit your bank account. All you
            need to do is track your portfolio's performance.
          </span>
        </div>

        <div class="bg-white">Image</div>
      </div>

      <div class="my-8 flex flex-col text-center">
        <span class="text-2xl lg:text-4xl font-bold">
          Safety of bonds, returns of equities.
        </span>
        <span class="text-lg lg:text-2xl">
          You never lose money on your investment.
        </span>
        <span class="text-lg lg:text-2xl">
          If a contract you purchased churns, it will be replaced immediately
          with an equivalent contract of the same value.
        </span>
        <span class="text-lg lg:text-2xl font-semibold">
          You can expect annual returns of 5-12%.
        </span>
      </div>

      <span class="my-4 font-header text-4xl lg:text-5xl text-center tracking-wider">
        Diversify the way you invest.
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

export default InvestorsPage;
