import React from "react";
import { getProjects, ProjectMetadata } from "../lib/projects";
import Projects from "../components/projects";

export default async function AllProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="pt-20">
      <div className="container max-w-3xl mx-auto p-5 ">
        <h1 className="text-4xl font-semi-bold mb-5">Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  );
}
