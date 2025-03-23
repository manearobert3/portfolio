import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function PrivacyPage() {
  const filePath = path.join(process.cwd(), "app", "content", "privacy.mdx");
  const source = fs.readFileSync(filePath, "utf8");
  const { content } = matter(source);

  return (
    <div className="container max-w-3xl mx-auto p-4">
      <div className="prose mt-16">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
