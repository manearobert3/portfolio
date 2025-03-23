import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container max-w-3xl mx-auto flex items-center justify-between h-full">
      <footer className="footer sm:footer-horizontal bg-transparent text-neutral-content p-4">
        <aside className="grid-flow-col items-center">
          {" "}
          <p>© {new Date().getFullYear()} - manearobert.dev</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="/privacy"
            className="text-gray-500 dark:text-gray-100 dark:hover:text-blue-600 hover:text-blue-600"
          >
            privacy
          </a>
          <a
            href="https://github.com/manearobert3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-100 dark:hover:text-gray-500 hover:text-black"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-petrisor-manea"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-100 dark:hover:text-blue-600 hover:text-blue-600 "
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </nav>
      </footer>
    </div>
  );
}
