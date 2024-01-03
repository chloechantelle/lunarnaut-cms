import React from "react";
import { PostContent } from "../lib/projects";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import { Grid } from "@mui/material";

type Props = {
  projects: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ projects, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <h1 className={"heading"}>
        <a href="/projects/">All projects</a>
      </h1>
      <div className={"content"}>
      <div className={"projects"}>
        <div className={"post-list"}>
          <Grid container spacing={2}>
            {projects.map((it, i) => (
              <PostItem post={it} />
            ))}
          </Grid>
        </div>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/projects" : "/projects/page/[page]"),
            as: (page) => (page === 1 ? null : "/projects/page/" + page),
          }}
        />
      </div>
      <ul className={"categories"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
          margin-top: 8rem;
        }
        .content {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
          margin-top: 4rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .projects {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .projects li {
          margin-bottom: 3.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
          margin-top: 7rem;
        }
        .categories li {
          margin-bottom: 1.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
    </div>
  );
}
