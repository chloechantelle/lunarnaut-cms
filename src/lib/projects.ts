import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type PostContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly tags?: string[];
  readonly fullPath: string;
};

let postCache: PostContent[];

export function fetchPostContent(): PostContent[] {
  if (postCache) {
    return postCache;
  }
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        tags: string[];
        slug: string;
        fullPath: string,
      };
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  // Sort projects by date
  postCache = allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
}

export function countProjects(tag?: string): number {
  return fetchPostContent().filter(
    (it) => !tag || (it.tags && it.tags.includes(tag))
  ).length;
}

export function listPostContent(
  page: number,
  limit: number,
  tag?: string
): PostContent[] {
  return fetchPostContent()
    .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
    .slice((page - 1) * limit, page * limit);
}
