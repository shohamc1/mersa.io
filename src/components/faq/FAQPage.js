import React, { useState } from "react";
import QABox from "./QABox";

const FAQPage = () => {
  const [active, setActive] = useState("company");

  return (
    <div class="flex flex-col justify-center items-center text-white mt-4">
      <div class="text-7xl font-header tracking-wider mb-8">
        Learn how <span class="font-subheader">mersa</span> works
      </div>

      <div class="mb-4">
        <span
          class={`cursor-pointer font-header text-4xl border-r px-2 ${
            active != "company" ? "text-gray-300" : "text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActive("company");
          }}
        >
          For companies
        </span>
        <span
          class={`cursor-pointer font-header text-4xl px-2 ${
            active != "investor" ? "text-gray-300" : "text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActive("investor");
          }}
        >
          For investors
        </span>
      </div>
      {active == "company" ? (
        <>
          <QABox question="Question 1" answer="Hello1" first />
          <QABox question="Question 2" answer="Hello2" />
        </>
      ) : (
        <>
          <QABox question="Question Investor 1" answer="Hello1" first />
          <QABox question="Question Investor 2" answer="Hello2" />
        </>
      )}
    </div>
  );
};

export default FAQPage;
