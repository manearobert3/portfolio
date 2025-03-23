import React from "react";
import { roboto_mono } from "../layout";

export default function Timeline() {
  return (
    <>
      <p className="text-3xl font-bold ml-7">Experience & Education</p>
      <ul className="timeline m-4 mt-6 mb-0 bg-stone-100 dark:bg-inherit timeline-snap-icon max-md:timeline-compact timeline-vertical border dark:border-slate-700 border-slate-300 rounded-2xl p-4">
        <li className="mb-6">
          <div className="timeline-middle col-start-1 ml-4 md:ml-13 max-w-screen-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 ml-9 md:ml-0"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start md:pl-6 pl-12 timeline-start-override ml-4 md:ml-10 md:text-start">
            <time
              className={`${roboto_mono.className} italic text-gray-600 dark:text-gray-400`}
            >
              Jul 2024 - Aug 2024
            </time>
            <div className="text-lg font-semibold">MHP - a Porsche Company</div>
            <div
              className={`${roboto_mono.className} italic text-gray-600 dark:text-gray-400`}
            >
              Software Developer (Intern)
            </div>
            <ul className="list-disc list-with-margin pl-5 pt-2">
              <li className="mb-2">
                Collaborated in a team of 5 to develop a full-stack web
                application for agile project management, featuring a planning
                and estimation game that helps teams effectively manage tasks
                and stories. The application included comprehensive CRUD
                operations, real-time game functionality using Web Sockets, and
                an attractive, user-friendly design.
              </li>
              <li className="mb-2">
                Gained experience working with various programming languages,
                libraries, and frameworks, including Java, Spring Boot,
                Liquibase, TypeScript, CSS, HTML, Ant Design, Redux Toolkit and
                React.
              </li>
              <li className="mb-2">
                Engaged in comprehensive training sessions covering front-end
                development, back-end architecture, and security best practices.
              </li>
              <li className="mb-2">
                Contributed to code reviews, troubleshooting, and iterative
                development in a collaborative, agile environment, actively
                participating in daily stand-ups, sprint planning, and team
                meetings to ensure high-quality deliverables.
              </li>
            </ul>
          </div>
          <hr className="dark:bg-slate-300 bg-black" />
        </li>
      </ul>
      <br />
      <ul className="timeline m-4 mt-0 bg-stone-100 dark:bg-inherit timeline-snap-icon max-md:timeline-compact timeline-vertical border dark:border-slate-700 border-slate-300 rounded-2xl p-4">
        <li className="mb-6">
          <div className="timeline-middle col-start-1 ml-4 md:ml-13 max-w-screen-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 ml-9 md:ml-0"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start md:pl-6 pl-12 timeline-start-override ml-4 md:ml-10 md:text-start">
            <time
              className={`${roboto_mono.className} italic text-gray-600 dark:text-gray-400`}
            >
              Oct 2022 - Jul 2025
            </time>
            <div className="text-lg font-semibold">Babeș-Bolyai University</div>
            <div
              className={`${roboto_mono.className} italic text-gray-600 dark:text-gray-400`}
            >
              Bachelor&apos;s in Computer Science
            </div>
            <ul className="list-disc list-with-margin pl-5 pt-2">
              <li className="mb-2">Language of study: English</li>
              <li className="mb-2">
                My second-year grade was 9.9 equivalent to GPA: 4
              </li>
              <li className="mb-2">
                Relevant Courses: Computer System Architecture, Object Oriented
                Programming, Data Structures and Algorithms, Algebra, Databases,
                Web Development, Computer Networks
              </li>
            </ul>
          </div>
          <hr className="dark:bg-slate-300 bg-black" />
        </li>
      </ul>
    </>
  );
}
