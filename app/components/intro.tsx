"use client";

import Image from "next/image";
import myImage from "../../public/images/image0.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaMapMarkerAlt,
  FaCopy,
} from "react-icons/fa";

export default function Intro() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center">
        {" "}
        <section className="p-6 md:w-11/12 ">
          <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Robert</h1>
          <p className="text-lg">
            Aspiring software engineer, currently in my third year of pursuing a
            bachelor&apos;s degree in Computer Science at Babeș-Bolyai
            University.
          </p>
          <div className="flex items-center mt-4">
            <FaMapMarkerAlt className="text-2xl mr-2 text-black dark:text-white" />
            <span className="text-l">Cluj-Napoca, Romania</span>
          </div>
          <br></br>

          <div className="flex space-x-4 mt-4 items-center">
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

            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 dark:text-gray-100 dark:hover:text-red-600 hover:text-red-600"
            >
              <FaFilePdf className="h-6 w-6 mr-1" />
              <span className="text-sm">Resume</span>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-slate-100 dark:bg-gray-900 shadow-md">
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              Contact me at:
              <span className="text-blue-600 dark:text-blue-400 ml-1">
                manea.robert.petrisor@gmail.com
              </span>
            </p>
            <button
              onClick={() => copyToClipboard("manea.robert.petrisor@gmail.com")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              title="Copy to clipboard"
            >
              <FaCopy className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </section>
        <div className="flex items-center justify-center w-1/2 md:w-1/2 sm:w-1/3 mb-6 md:mb-0">
          <Image
            src={myImage}
            alt="Picture of the author"
            width={400}
            height={300}
            className="rounded-3xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
