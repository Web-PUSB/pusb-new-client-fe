"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import pusblogo from "./public./assets/pusblogo.png";
import SanctusLogo from "./assets/sanctusLogo.png";
import Image from "next/image";
const Header = () => {
  const [scroll, scrollValue] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        scrollValue(window.Math.round(window.scrollY));
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <header
      className={`w-full sticky top-0 z-50 p-4 flex ${
        scroll >= 50 ? "bg-[#020617] shadow-md text-white" : "bg-transparent"
      }`}
    >
      <div className="relative w-full flex items-center justify-between">
        <div className="container mx-auto flex flex-wrap items-center justify-around">
          <Link href="/" className="flex gap-2">
            <Image src={pusblogo} width={40} height={40} alt="PUSB Logo" />
            <Image src={SanctusLogo} width={40} height={40} alt="PUSB Logo" />
            <p className="flex flex-col md:flex-row items-center gap-2 self-center text-xl lg:text-[28px] font-black whitespace-nowrap">
              PUSB <span className="hidden md:block"> - </span>
              <span className="text-xs md:text-sm"> Sanctus Cabinet </span>
            </p>
          </Link>
          <ul className="flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium px-8 hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/pusb/pusb-about"
                className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/pusb/pusb-structure"
                className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                Structure
              </Link>
            </li>
            <li>
              <Link
                href="/pusb/pusb-event"
                className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/pusb/pusb-cnc"
                className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                CnC
              </Link>
            </li>
            <li>
              <Link
                href="/pusb/pusb-sop"
                className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                SOP
              </Link>
            </li>
            <li>
              <Link
                href="/pusb/pusb-news"
                className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/pusb/pusb-contact"
                className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/" className="flex gap-2">
                      <Image
                        src={pusblogo}
                        width={40}
                        height={40}
                        alt="PUSB Logo"
                      />
                      <Image
                        src={SanctusLogo}
                        width={40}
                        height={40}
                        alt="PUSB Logo"
                      />
                      <p className="flex text-black flex-col md:flex-row items-center gap-1 self-center text-xl lg:text-[28px] font-black whitespace-nowrap">
                        PUSB
                        <span className="text-sm"> Sanctus Cabinet </span>
                      </p>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 text-black font-medium">
                    <li>
                      <Link
                        href="/pusb/pusb-about"
                        className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pusb/pusb-structure"
                        className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                      >
                        Structure
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pusb/pusb-event"
                        className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pusb/pusb-cnc"
                        className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                      >
                        CnC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pusb/pusb-sop"
                        className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                      >
                        SOP
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pusb/pusb-news"
                        className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pusb/pusb-contact"
                        className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
