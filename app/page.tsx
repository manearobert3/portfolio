import Header from "@/app/components/header";
import ThemeToggle from "@/app/components/theme-toggle";
import React from "react";
import Intro from "./components/intro";
import Timeline from "./components/timeline";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Home = () => {
  return (
    <section className="py-7">
      <div className="container max-w-3xl mx-auto flex flex-col h-full">
        <Intro />

        <br></br>
        <br></br>
        <Timeline />
      </div>
    </section>
  );
};

export default Home;
