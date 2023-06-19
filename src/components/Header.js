import React from "react";
import logo from "../assets/svg/logo.svg";

export default function Header() {
  return (
    /* Main navigation */
    <nav
      className="absolute top-0 flex-no-wrap flex w-full items-center justify-between md:flex-wrap md:justify-start text-xl text-gray-500 bg-transparent"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* Logo */}
        <div className="flex items-center m-2">
          <a href="#home">
            <img
              src={logo}
              alt="Aman Kumar"
              loading="lazy"
              className="h-14"
            ></img>
          </a>
        </div>

        {/* hamburger button for mobile view */}
        <button
          className="block ml-auto border-0 px-2 text-xl text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 md:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible navigation container */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center md:!flex md:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <ul
            className="list-style-none ml-auto flex flex-col items-end pr-0 md:flex-row"
            data-te-navbar-nav-ref
          >
            <li className="mb-4 md:mb-0 md:pl-2" data-te-nav-item-ref>
              <a
                className="hover:text-blue-300 focus:text-gray-700"
                href="#skills"
                data-te-nav-link-ref
              >
                Skills
              </a>
            </li>

            <li className="mb-4 md:mb-0 md:pl-2" data-te-nav-item-ref>
              <a
                className="hover:text-blue-300 focus:text-gray-700"
                href="#projects"
                data-te-nav-link-ref
              >
                Projects
              </a>
            </li>

            <li className="mb-4 md:mb-0 md:pl-2" data-te-nav-item-ref>
              <a
                className="hover:text-blue-300 focus:text-gray-700"
                href="#about"
                data-te-nav-link-ref
              >
                About Me
              </a>
            </li>

            <li className="mb-4 md:mb-0 md:pl-2" data-te-nav-item-ref>
              <a
                className="hover:text-blue-300 focus:text-gray-700"
                href="#contact"
                data-te-nav-link-ref
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
