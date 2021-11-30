import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import logo from "../images/mersa_no_bg.webp";

const Header = () => {
  return (
    <div class="sticky top-0 z-20 flex flex-row font-subheader py-2 items-center backdrop-filter backdrop-blur">
      <div class="flex flex-row">
        {/* Left side */}
        <Link to="/">
          <img src={logo} class="h-8 w-auto" alt="Logo" />
        </Link>
      </div>
      <div class="hidden lg:flex flex-row ml-auto space-x-8 justify-center content-center">
        {/* Right side */}
        <Link
          to="/companies"
          className="my-auto items-center no-underline text-white text-lg"
        >
          For Companies
        </Link>
        <Link
          to="/investors"
          className="my-auto items-center no-underline text-white text-lg"
        >
          For Investors
        </Link>
        <Link
          to="/faq"
          className="my-auto items-center no-underline text-white text-lg"
        >
          FAQs
        </Link>
        <Link to="/signup">
          <div class="bg-white px-4 py-2 rounded-lg font-extrabold">
            Get Started
          </div>
        </Link>
      </div>
      <div class="lg:hidden flex items-center ml-auto">
        {/* Mobile menu */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <ChevronDownIcon
                className="w-5 h-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <Link to="/companies">
                    <button className="text-white group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold tracking-wide">
                      For Companies
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/investors">
                    <button className="text-white group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold tracking-wide">
                      For Investors
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/faq">
                    <button className="text-white group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold tracking-wide">
                      FAQs
                    </button>
                  </Link>
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  <Link to="/signup">
                    <button className="text-white group flex rounded-md items-center w-full px-2 py-2 text-sm font-extrabold tracking-wide">
                      Get Started
                    </button>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
