import Image from "next/image";
import myImage from "../../public/images/avatar.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Intro() {
  return (
    <div>
      <div className="flex items-left">
        <section className=" p-6">
          <h1 className="text-4xl font-bold mb-4">Hi! I'm Robert</h1>
          <p className="text-lg">
            Aspiring software engineer, currently in my third year of pursuing a
            bachelor's degree in Computer Science.
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
              className="text-gray-500 hover:text-black"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/robert-petrisor-manea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-red-600"
            >
              <FaFilePdf className="h-6 w-6 mr-1" />
              <span className="text-sm">Resume</span>
            </a>
          </div>
        </section>
        <div className="flex items-center justify-center">
          <Image
            src={myImage}
            alt="Picture of the author"
            width={400}
            height={300}
            className="rounded-3xl" // Use "rounded-lg" for smoother edges
            priority
          />
        </div>
      </div>
    </div>
  );
}
