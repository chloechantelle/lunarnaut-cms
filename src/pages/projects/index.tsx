import { GetStaticProps } from "next";
import Layout from "../../components/layout/layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countProjects, listPostContent, PostContent } from "../../lib/projects";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";

type Props = {
  projects: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ projects, tags, pagination }: Props) {
  const url = "/projects";
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

export const getStaticProps: GetStaticProps = async () => {
  const projects = listPostContent(1, config.projects_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countProjects() / config.projects_per_page),
  };
  return {
    props: {
      projects,
      tags,
      pagination,
    },
  };
};
