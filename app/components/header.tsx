"use client";
import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  return (
    <div className="navbar  sticky top-0 z-50 backdrop-blur-lg">
      <div className="container max-w-3xl mx-auto flex items-center justify-between h-full">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => router.back()}
          >
            <FaArrowLeft className="h-5 w-5" />
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
            Contact me
          </Link>
          <Link className="btn btn-ghost text-xl" href="/projects/introduction">
            About me
          </Link>
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
