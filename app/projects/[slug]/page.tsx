import { getProjectBySlug, getProjects } from "@/app/lib/projects";
import React from "react";
import "tailwindcss/tailwind.css";
import "../../globals.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({
    slug: project.slug,
  }));
  return slugs;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, description, date } = metadata;

  return (
    <div className="container max-w-3xl mx-auto p-4">
      <div className="dark:drop-shadow-sm shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="dark:text-gray-400 text-gray-600 mb-2">{description}</p>
        <p className="dark:text-gray-500 text-gray-500 text-sm mb-6">
          {new Date(date).toLocaleDateString()}
        </p>
        <div className="prose mt-16">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
}
