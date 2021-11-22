import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
const axios = require("axios").default;

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

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [workEmailError, setWorkEmailError] = useState(false);
  const [linkedinError, setLinkedinError] = useState(false);
  const [countriesError, setCountriesError] = useState(false);
  const [accTypeError, setAccTypeError] = useState(false);
  const [refCodeError, setRefCodeError] = useState(false);
  const [mrrError, setMRRError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkUrlFunction = () => {
    if (typeof window !== "undefined") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      setRefCode(urlParams.get("refcode"));
    }
  };

  const submit = () => {
    setLoading(true);
    setFormError(false);

    validateInputs();

    if (
      firstNameError ||
      lastNameError ||
      workEmailError ||
      linkedinError ||
      countriesError ||
      accTypeError ||
      refCodeError ||
      mrrError
    ) {
      setLoading(false);
      return;
    }

    axios
      .post(
        "https://us-central1-mersa-332807.cloudfunctions.net/registerUser",
        {
          firstName: firstName,
          lastName: lastName,
          workEmail: workEmail,
          country: selectedCountry.value,
          refCode: refCode,
          accType: selectedAccountType.value,
          mrr: mrr,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          setFormError(res.data);
          setLoading(false);
        } else {
          setSuccess(res.data.userCode);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setFormError("User already exists.");
      });
  };

  const validateInputs = () => {
    setFirstNameError(firstName ? false : true);
    setLastNameError(lastName ? false : true);
    setWorkEmailError(workEmail && validateEmail(workEmail) ? false : true);
    setLinkedinError(linkedin && validateLinkedIn(linkedin) ? false : true);
    setRefCodeError(refCode && validateRefCode(refCode) ? false : true);
    setCountriesError(selectedCountry.id !== "0" ? false : true);
    setAccTypeError(selectedAccountType.id !== "0" ? false : true);
    setMRRError(mrr && mrr > 0 ? false : true);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateLinkedIn(linkedin) {
    const re = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/;
    return re.test(String(linkedin).toLowerCase());
  }

  function validateRefCode(refCode) {
    return refCode.length === 10 || refCode.length === 0 ? true : false;
  }

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
            {firstNameError ? (
              <span class="text-xs text-red-500 pt-1 px-1">
                Please enter your first name
              </span>
            ) : (
              <></>
            )}
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
            {lastNameError ? (
              <span class="text-xs text-red-500 pt-1 px-1">
                Please enter your last name
              </span>
            ) : (
              <></>
            )}
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
          {workEmailError ? (
            <span class="text-xs text-red-500 pt-1 px-1">
              Please enter a valid email
            </span>
          ) : (
            <></>
          )}
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
          {linkedinError ? (
            <span class="text-xs text-red-500 pt-1 px-1">
              Please enter a LinkedIn profile
            </span>
          ) : (
            <></>
          )}
        </div>

        <div class="flex flex-col">
          {/* Row 4 */}
          <span class="font-light text-sm text-lightWhite">Country</span>
          <Listbox value={selectedCountry} onChange={setSelectedCountry}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 border-black bg-backgroundGray rounded-md">
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
          {countriesError ? (
            <span class="text-xs text-red-500 pt-1 px-1">Select a country</span>
          ) : (
            <></>
          )}
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
          {refCodeError ? (
            <span class="text-xs text-red-500 pt-1 px-1">
              Please enter a valid referral code
            </span>
          ) : (
            <></>
          )}
        </div>

        <div class="flex flex-col">
          {/* Row 6 */}
          <span class="font-light text-sm text-lightWhite">I am a</span>
          <Listbox
            value={selectedAccountType}
            onChange={setSelectedAccountType}
          >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 border-black bg-backgroundGray rounded-md">
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
          {accTypeError ? (
            <span class="text-xs text-red-500 pt-1 px-1">
              Select an account type
            </span>
          ) : (
            <></>
          )}
        </div>

        {selectedAccountType.id === "co" ? (
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
            {mrrError ? (
              <span class="text-xs text-red-500 pt-1 px-1">
                Please enter a valid MRR value
              </span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}

        <button
          class="flex flex-row space-x-2 justify-center items-center bg-white rounded-md py-2"
          onClick={submit}
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="animate-spin"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z" />
            </svg>
          ) : (
            <>
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
            </>
          )}
        </button>

        {formError ? (
          <div class="flex flex-row space-x-2 justify-center items-center border-2 border-red-500 rounded-md py-2 font-light text-lg">
            {formError}
          </div>
        ) : (
          <></>
        )}

        {success ? <div>{success}</div> : <></>}
      </div>
    </div>
  );
};

export default SignUpPage;
