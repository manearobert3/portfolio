import Header from "@/app/components/header";
import ThemeToggle from "@/app/components/theme-toggle";
import React from "react";
import Intro from "./components/intro";

const Home = () => {
  return (
    <section className="py-7">
      <div className="container max-w-3xl mx-auto flex flex-col p-5 items-center h-full">
        <Intro />
      </div>
    </section>
  );
};

export default Home;
