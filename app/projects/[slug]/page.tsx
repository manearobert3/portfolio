import { getProjectBySlug } from "@/app/lib/projects";
import React from "react";
import "tailwindcss/tailwind.css";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Project({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(slug);

  if (!project) {
    return <div>Post not found</div>;
  }

  const { metadata, content } = project;
  const { title, description, date } = metadata;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-400 text-sm mb-6">
          {new Date(date).toLocaleDateString()}
        </p>
        <div className="prose mt-16">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
}
