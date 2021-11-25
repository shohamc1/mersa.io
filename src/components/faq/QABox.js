import React, { useState } from "react";

const QABox = ({ question, answer, first }) => {
  const [visible, setVisible] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div
      class={`flex flex-row ${
        first ? "border-t" : ""
      } border-b py-2 w-full border-black`}
    >
      <div class="flex items-center">
        {!visible ? (
          <svg
            width="24"
            height="24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="mx-4 self-start mt-1 cursor-pointer flex-shrink-0"
            onClick={(e) => toggle(e)}
          >
            <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="mx-4 self-start mt-1 cursor-pointer flex-shrink-0"
            onClick={(e) => toggle(e)}
          >
            <path d="M0 12v1h23v-1h-23z" />
          </svg>
        )}
        <div class="flex flex-col">
          <span class="text-lg lg:text-2xl font-semibold">{question}</span>
          {visible ? (
            <span class="mt-1 lg:text-xl font-light">{answer}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default QABox;
