import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../../components/layout/layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import PostList from "../../../components/PostList";
import config from "../../../lib/config";
import { countProjects, listPostContent, PostContent } from "../../../lib/projects";
import { listTags, TagContent } from "../../../lib/tags";

type Props = {
  projects: PostContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ projects, tags, pagination, page }: Props) {
  const url = `/projects/page/${page}`;
  const title = "All projects";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList projects={projects} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const projects = listPostContent(page, config.projects_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countProjects() / config.projects_per_page),
  };
  return {
    props: {
      page,
      projects,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countProjects() / config.projects_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
