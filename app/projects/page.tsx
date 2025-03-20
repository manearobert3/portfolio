import React from "react";
import { getProjects, ProjectMetadata } from "../lib/projects";
import Projects from "../components/projects";
import Layout from "../layout";
import "../globals.css";
export default async function AllProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <div className="container max-w-3xl mx-auto p-5 ">
        <Projects projects={projects} />
      </div>
    </section>
  );
}
