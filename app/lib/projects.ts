import path from "path";
import fs from "fs";
import matter from "gray-matter";
const rootDirectory = path.join(process.cwd(), "app", "content", "projects");

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};
export type ProjectMetadata = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filepath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filepath, "utf-8");

    const { data, content } = matter(fileContents);

    return {
      metadata: {
        title: data.title,
        description: data.description,
        date: data.date,
        slug,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}
