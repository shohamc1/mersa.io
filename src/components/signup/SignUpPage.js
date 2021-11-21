import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const countries = [
  { id: "0", value: "Select a country" },
  { id: "sg", value: "Singapore" },
  { id: "in", value: "India" },
];

const accountType = [
  { id: "0", value: "Set an account type" },
  { id: "in", value: "Investor" },
  { id: "co", value: "Company" },
];

const SignUpPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedAccountType, setSelectedAccountType] = useState(
    accountType[0]
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [refCode, setRefCode] = useState("");
  const [mrr, setMRR] = useState("");

  const checkUrlFunction = () => {
    if (typeof window !== "undefined") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      setRefCode(urlParams.get("refcode"));
    }
  };

  const submit = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(workEmail);
    console.log(linkedin);
    console.log(refCode);
    console.log(selectedCountry);
    console.log(selectedAccountType);
    console.log(mrr);
  };

  useEffect(() => {
    checkUrlFunction();
  }, []);

  return (
    <div class="flex flex-col justify-center items-center text-white mt-4">
      <div class="text-5xl font-header tracking-wider mb-8">
        Sign up for early access
      </div>

      <div class="flex flex-col backdrop-blur-100 bg-white bg-opacity-10 p-8 rounded-xl space-y-4">
        <div class="flex flex-row space-x-12">
          {/* Row 1 */}
          <div class="flex flex-col">
            <span class="font-light text-sm text-lightWhite">First Name</span>
            <input
              type="text"
              class="px-4 py-2 border-2 border-black bg-backgroundGray rounded-md"
              placeholder="Jane"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div class="flex flex-col">
            <span class="font-light text-sm text-lightWhite">Last Name</span>
            <input
              type="text"
              class="px-4 py-2 border-2 border-black bg-backgroundGray rounded-md"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-col">
          {/* Row 2 */}
          <span class="font-light text-sm text-lightWhite">Work Email</span>
          <input
            type="email"
            class="px-4 py-2 border-2 border-black bg-backgroundGray rounded-md"
            placeholder="hello@mersa.io"
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
          />
        </div>

        <div class="flex flex-col">
          {/* Row 3 */}
          <span class="font-light text-sm text-lightWhite">
            LinkedIn Profile
          </span>
          <input
            type="email"
            class="px-4 py-2 border-2 border-black bg-backgroundGray rounded-md"
            placeholder="linkedin.com/in/mersa/"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>

        <div class="flex flex-col">
          {/* Row 4 */}
          <span class="font-light text-sm text-lightWhite">Country</span>
          <Listbox value={selectedCountry} onChange={setSelectedCountry}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 border-black bg-backgroundGray rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selectedCountry.value}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-backgroundGray rounded-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {countries.map((type, accountIdx) => (
                    <Listbox.Option
                      key={accountIdx}
                      className={({ active }) =>
                        `${
                          active ? "text-amber-900 bg-amber-100" : "text-white"
                        }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={type}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {type.value}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div class="flex flex-col">
          {/* Row 5 */}
          <span class="font-light text-sm text-lightWhite">Referral Code</span>
          <input
            type="text"
            class="px-4 py-2 border-2 border-black bg-backgroundGray rounded-md"
            placeholder="ABC194H"
            value={refCode}
            onChange={(e) => setRefCode(e.target.value)}
          />
        </div>

        <div class="flex flex-col">
          {/* Row 6 */}
          <span class="font-light text-sm text-lightWhite">I am a</span>
          <Listbox
            value={selectedAccountType}
            onChange={setSelectedAccountType}
          >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 border-black bg-backgroundGray rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">
                  {selectedAccountType.value}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-backgroundGray rounded-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {accountType.map((type, accountIdx) => (
                    <Listbox.Option
                      key={accountIdx}
                      className={({ active }) =>
                        `${
                          active ? "text-amber-900 bg-amber-100" : "text-white"
                        }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={type}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {type.value}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {selectedAccountType.id == "co" ? (
          <div class="flex flex-col">
            {/* Row 7 (hidden by default) */}
            <span class="font-light text-sm text-lightWhite">
              Your company's estimated monthly recurring revenue
            </span>
            <input
              type="number"
              class="px-4 py-2 border-2 border-black bg-backgroundGray rounded-md"
              placeholder="$1000..."
              value={mrr}
              onChange={(e) => setMRR(e.target.value)}
            />
          </div>
        ) : (
          <></>
        )}

        <button
          class="flex flex-row space-x-2 justify-center items-center bg-white rounded-md py-2 mt-8"
          onClick={submit}
        >
          <span class="font-subheader text-2xl text-black">Sign Up</span>
          <svg
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
