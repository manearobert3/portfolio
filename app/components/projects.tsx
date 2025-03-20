"use client";
import React from "react";
import { ProjectMetadata } from "../lib/projects";
import { useRouter } from "next/navigation";
import { roboto_mono, inter } from "../layout";
export default function Projects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  const router = useRouter();

  return (
    <>
      <article className="prose">
        <h1 className={`pl-3 pb-10 pt-10 ${roboto_mono.className} text-4xl`}>
          my projects:
        </h1>
      </article>

      <div className="  border-slate-300 dark:border-slate-700 border rounded-2xl dark:bg-inherit bg-stone-100">
        <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-[3vw] p-10">
          {projects.map((project) => {
            return (
              <li key={project.slug} className="min-h-32">
                <div
                  className="card rounded-xl cursor-pointer border border-slate-300 dark:border-slate-950 dark:bg-slate-900 min-h-full bg-gray-50 mb-5  transition-transform transform hover:-translate-y-1 "
                  onClick={() => router.push("/projects/" + project.slug)}
                >
                  <figure>
                    <img
                      src={project.image}
                      className="h-48 w-full object-cover p-3 rounded-2xl"
                    />
                  </figure>
                  <div className="card-body p-6 flex flex-col justify-between h-full">
                    <h2 className="card-title">{project.title}</h2>
                    <p className="text-sm">{project.description}</p>
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
