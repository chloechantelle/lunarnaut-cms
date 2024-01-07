import React from "react";
import { PostContent } from "../lib/projects";
import { TagContent } from "../lib/tags";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import lightBg from "../../public/images/light-bg.png";

type Props = {
  projects: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
  tags: TagContent[];
};
export default function TagPostList({ projects, tag, pagination, tags }: Props) {
  return (
    <div className={"background"} style={{ backgroundImage: `url(${lightBg.src})`, height: `100vh` }}>
      <div className={"container"}>
        <h1>
          <a href="/projects/">All projects</a> / <span>{tag.name}</span>
        </h1>
        <div className="items">
          {projects.map((it) => (
            <PostItem post={it} />
          ))}
        </div>
        {/* <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: () => "/projects/tags/[[...slug]]",
            as: (page) =>
              page === 1
                ? "/projects/tags/" + tag.slug
                : `/projects/tags/${tag.slug}/${page}`,
          }}
        /> */}
        <style jsx>
          {`
          .background {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            background-size: cover;
            }
          .container {
            margin: 0 auto;
            max-width: 80%;
            width: 100%;
            padding: 0 1.5rem;
            display: flex;
            flex-direction: column;
          }
          .items {
            display: flex;
            flex-wrap: wrap;
          }
          h1 {
            margin: 10rem 10rem 2rem;
            padding: 0;
            font-weight: 100;
            font-size: 1.75rem;
            color: #9b9b9b;
          }
          h1 span {
            font-weight: bold;
            color: #222;
          }
          ul {
            margin: 0;
            padding: 0;
            flex: 1 0 auto;
          }
          li {
            list-style: none;
            margin-bottom: 3.5rem;
          }

          @media (min-width: 769px) {
            h1 {
              font-size: 2rem;
            }
          }
        `}
        </style>
      </div>
    </div>
  );
}
