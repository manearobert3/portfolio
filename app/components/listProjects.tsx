"use client";
import React from "react";
import { ProjectMetadata } from "../lib/projects";
import { roboto_mono } from "../layout";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export default function ListProjects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  return (
    <>
      <article className="prose">
        <h1 className={`pl-6 pb-10 pt-10 ${roboto_mono.className} text-4xl`}>
          some of my projects:
        </h1>
      </article>

      <div>
        <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-[4vw] p-2">
          {projects.map((project) => {
            return (
              <li key={project.slug} className="min-h-32">
                <div className="card rounded-xl border border-slate-300 dark:border-slate-950 dark:bg-slate-900 min-h-full bg-gray-50 mb-4 transition-transform transform hover:-translate-y-1 ">
                  <figure className="relative w-full h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute pt-2 pl-2 pr-2 w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                      loading="lazy"
                    />
                  </figure>
                  <div className="card-body p-5 flex flex-col justify-between h-full">
                    <h2 className="card-title text-lg">{project.title}</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
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
