import React from "react";
import Intro from "./components/intro";
import Timeline from "./components/timeline";
import ListProjects from "./components/listProjects";
import { getProjects } from "./lib/projects";

const Home = async () => {
  const projects = await getProjects(3);
  return (
    <section className="py-7">
      <div className="container max-w-3xl mx-auto flex flex-col h-full">
        <Intro />
        <br></br>
        <br></br>
        <Timeline />
        <br></br>
        <ListProjects projects={projects} />
      </div>
    </section>
  );
};

export default Home;
