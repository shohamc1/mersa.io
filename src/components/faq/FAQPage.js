import React from "react";
import QABox from "./QABox";

const FAQPage = () => {
  return (
    <div class="flex flex-col justify-center items-center text-white mt-4">
      <QABox question="Question 1" answer="Hello1" first />
      <QABox question="Question 2" answer="Hello2" />
    </div>
  );
};

export default FAQPage;
