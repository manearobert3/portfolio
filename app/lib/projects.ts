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
  image: string;
  date: string;
  tags: string[];
  slug: string;
  github: string;
  demo: string;
  url: string;
  priority: number;
};

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const filenames = fs.readdirSync(rootDirectory);

  const projects = filenames
    .map((filename) => exportProjectMetadata(filename))
    .sort((x: ProjectMetadata, y: ProjectMetadata) => {
      const priorityA = x.priority ?? 0;
      const priorityB = y.priority ?? 0;
      if (priorityA !== priorityB) {
        if (priorityA === 0) {
          return 1;
        }
        if (priorityB === 0) {
          return -1;
        }

        return priorityB - priorityA;
      }

      if (x.date < y.date) {
        return 1;
      } else {
        return -1;
      }
    });
  if (limit) {
    return projects.slice(0, limit);
  } else {
    return projects;
  }
}

export function exportProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePathComposed = path.join(rootDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePathComposed, "utf-8");
  const { data } = matter(fileContents);
  return {
    title: data.title,
    image: data.image,
    description: data.description,
    date: data.date,
    tags: data.tags,
    slug,
    github: data.github,
    demo: data.demo,
    url: data.url,
    priority: data.priority,
  };
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filepath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filepath, "utf-8");

    const { data, content } = matter(fileContents);

    return {
      metadata: {
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date,
        tags: data.tags,
        slug,
        github: data.github,
        demo: data.demo,
        url: data.url,
        priority: data.priority,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}
