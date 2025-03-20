"use client";
import React from "react";
import { ProjectMetadata } from "../lib/projects";
import { useRouter } from "next/navigation";
import { roboto_mono, inter } from "../layout";
export default function ListProjects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  const router = useRouter();

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
                  <figure className="relative w-full h-48 overflow-hidden bg-gray-200 rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
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
                    <div className="mt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline text-sm"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 text-blue-500 hover:underline text-sm"
                        >
                          Live Demo
                        </a>
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
