import React from "react";
import { ProjectMetadata } from "../lib/projects";

export default function Projects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  return (
    <div className="rounded-lg shadow-md">
      <ul className="list-none p-0">
        {projects.map((project) => (
          <li key={project.slug}>
            <div className="card bg-base-100 dark:bg-blue-50 mb-5 p-2 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg h-100 shadow-xl">
              <figure>
                <img src={project.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">{project.title}</h2>
                <p className="text-xs">{project.description}</p>
                <div className="card-actions justify-start mt-5">
                  {project.tags.length > 0 &&
                    project.tags.map((tag: string) => (
                      <div
                        key={tag}
                        className="badge badge-outline dark:badge-fill "
                      >
                        {tag}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
