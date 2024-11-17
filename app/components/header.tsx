import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar  sticky top-0 z-50 backdrop-blur-lg">
      <div className="container max-w-3xl mx-auto flex items-center justify-between h-full">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 text-center">
          <Link className="btn btn-ghost text-xl" href="/">
            Main
          </Link>
          <Link className="btn btn-ghost text-xl" href="/projects">
            Projects
          </Link>
          <Link className="btn btn-ghost text-xl" href="/contact">
            Contact
          </Link>
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
