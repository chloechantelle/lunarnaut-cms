import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/layout/layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import TagPostList from "../../../components/TagPostList";
import config from "../../../lib/config";
import { countProjects, listPostContent, PostContent } from "../../../lib/projects";
import { getTag, listTags, TagContent } from "../../../lib/tags";
import Head from "next/head";

type Props = {
  projects: PostContent[];
  tag: TagContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
  tags: TagContent[];
};
export default function Index({ projects, tag, pagination, page, tags }: Props) {
  const url = `/projects/tags/${tag.name}` + (page ? `/${page}` : "");
  const title = tag.name;
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList projects={projects} tag={tag} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  const [slug, page] = [queries[0], queries[1]];
  const projects = listPostContent(
    page ? parseInt(page as string) : 1,
    config.projects_per_page,
    slug
  );
  const tag = getTag(slug);
  const pagination = {
    current: page ? parseInt(page as string) : 1,
    pages: Math.ceil(countProjects(slug) / config.projects_per_page),
  };
  const props: {
    projects: PostContent[];
    tag: TagContent;
    pagination: { current: number; pages: number };
    page?: string;
  } = { projects, tag, pagination };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countProjects(tag.slug) / config.projects_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};
