"use client";
import React from "react";
import { ProjectMetadata } from "../lib/projects";
import { roboto_mono } from "../fonts/fonts";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export default function Projects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  return (
    <>
      <article className="prose">
        <h1 className={`pl-3 pb-10 pt-10 ${roboto_mono.className} text-4xl`}>
          my projects:
        </h1>
      </article>

      <div className="border-slate-300 dark:border-slate-700 border rounded-2xl dark:bg-inherit bg-stone-100">
        <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-[3vw] p-4">
          {projects.map((project) => {
            return (
              <li key={project.slug} className="min-h-32">
                <div className="card rounded-xl  border border-slate-300 dark:border-slate-950 dark:bg-slate-900 min-h-full bg-gray-50 mb-5 transition-transform transform hover:-translate-y-1 ">
                  <figure>
                    <img
                      src={project.image}
                      className="h-48 w-full object-cover p-3 rounded-2xl"
                    />
                  </figure>
                  <div className="card-body p-6 flex flex-col justify-between h-full">
                    <h2 className="card-title">{project.title}</h2>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {project.description}
                    </p>
                    <div className="card-actions justify-start mt-2">
                      {project.tags.length > 0 &&
                        project.tags.map((tag: string) => (
                          <div
                            key={tag}
                            className="badge badge-sm rounded-md badge-primary dark:text-white border-gray-200 bg-gray-200 dark:bg-slate-700 dark:border-slate-900"
                          >
                            {tag}
                          </div>
                        ))}
                    </div>
                    <div className="mt-4 gap-4 flex flex-wrap">
                      {project.github && (
                        <button
                          className="btn btn-neutral btn-sm text-sm text-slate-600 border-slate-300 bg-slate-100 hover:bg-slate-600 hover:text-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-500"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <FaGithub className="h-5 w-5" />
                          GitHub
                        </button>
                      )}
                      {project.url && (
                        <button
                          className="btn btn-neutral btn-sm text-sm text-slate-600 border-slate-300 bg-slate-100 hover:bg-slate-600 hover:text-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-500"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <FaExternalLinkAlt className="h-4 w-4" />
                          Link
                        </button>
                      )}
                      {project.demo && (
                        <button
                          className="btn btn-neutral btn-sm text-sm text-slate-600 border-slate-300 bg-slate-100 hover:bg-slate-600 hover:text-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-500"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <FaExternalLinkAlt className="h-4 w-4" />
                          Explore
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
