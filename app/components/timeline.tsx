import React from "react";
import Image from "next/image";
export default function Timeline() {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-transparent border border-slate-300 rounded-lg p-4">
        <li>
          <div className="timeline-middle timeline-item max-w-screen-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start timeline-start-override ml-10 md:text-start">
            <time className="font-mono italic">Jul 2024 - Aug 2024</time>
            <div className="text-lg font-black">MHP - a Porsche Company</div>
            <div className="font-mono italic">Software Developer (Intern)</div>▪
            Collaborated in a team of 5 to develop a full-stack web application
            for agile project management, featuring a planning and estimation
            game that helps teams effectively manage tasks and stories. The
            application included comprehensive CRUD operations, real-time game
            functionality using Web Sockets, and an attractive, user-friendly
            design.
            <div>
              ▪ Gained experience working with various programming languages,
              libraries, and frameworks, including Java, Spring Boot, Liquibase,
              TypeScript, CSS, HTML, Ant Design, Redux Toolkit and React.
            </div>
            <div>
              ▪ Engaged in comprehensive training sessions covering front-end
              development, back-end architecture, and security best practices.
            </div>
            <div>
              ▪ Contributed to code reviews, troubleshooting, and iterative
              development in a collaborative, agile environment, actively
              participating in daily stand-ups, sprint planning, and team
              meetings to ensure high-quality deliverables.
            </div>
          </div>
          <hr />
        </li>
      </ul>
      <br></br>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-transparent border border-slate-300 rounded-lg p-4">
        <li>
          <div className="timeline-middle timeline-item max-w-screen-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start timeline-start-override ml-10 md:text-start">
            <time className="font-mono italic">Oct 2022 - Jul 2025</time>
            <div className="text-lg font-black">Babeș-Bolyai University</div>
            <div className="font-mono italic">
              Bachelor's in Computer Science
            </div>
            <div>▪ Language of study: English</div>
            <div>▪ My second-year grade was 9.9 equivalent to GPA: 4</div>
            <div>
              ▪ Relevant Courses: Computer System Architecture, Object Oriented
              Programming, Data Structures and Algorithms, Algebra, Databases,
              Web Development, Computer Networks
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
}
