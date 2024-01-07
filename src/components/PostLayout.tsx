import React from "react";
import styles from "../../public/styles/content.module.css";
import Layout from "./layout/layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import darkBg from "../../public/images/dark-bg.jpg";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
  thumbnailUrl: string;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description,
  children,
  thumbnailUrl
}: Props) {
  const keywords = tags.map(it => getTag(it).name);
  const authorName = getAuthor(author).name;

  return (
    <Layout>
      <BasicMeta
        url={`/projects/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/projects/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/projects/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/projects/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        thumbnailUrl={thumbnailUrl}
        description={description}
      />
      <div className={"container"}>
        <article>
          <header style={{ backgroundImage: `url(${darkBg.src})` }}>
            <h1>{title}</h1>
            <p className={"description centered"}>{description}</p>
            {/* <div className={"metadata"}>
              <div>
                <Date date={date} />
              </div>
              <div>
              — <Author author={getAuthor(author)} />
              </div>
            </div> */}
          </header>
          {/* <ul className={"tag-list"}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul> */}
          <div className={styles.content}>{children}</div>
        </article>
      </div>
      <style jsx>
        {`
            .container {
              display: block;
              max-width: 80%;
              width: 100%;
              margin: 0 auto;
              box-sizing: border-box;
              z-index: 0;
              margin-top: 3rem;
              background: whitesmoke;
            }
            .description {
              font-size: 20px;
              font-family: 'Roboto', sans-serif;
              margin: 0 auto;
            }
            .metadata div {
              display: inline-block;
              margin-right: 0.5rem;
            }
            article {
              flex: 1 0 auto;
            }
            header {
              width: 100%;
              text-align: center;
              padding: 4rem 0;
              background: black;
              color: white;
            }
            h1 {
              font-size: 87px;
              margin: 1rem 0;
            }
            h2 {
              font-size: 47px;
              margin: 1rem 0;
            }
            p {
              font-size: 24px;
            }
            .tag-list {
              list-style: none;
              text-align: right;
              margin: 1.75rem 0 0 0;
              padding: 0;
            }
            .tag-list li {
              display: inline-block;
              margin-left: 0.5rem;
            }
            .social-list {
              margin-top: 3rem;
              text-align: center;
            }

            @media (min-width: 769px) {
              .container {
                display: flex;
                flex-direction: column;
              }
            }
          `}
      </style>
      <style global jsx>
        {`
            /* Syntax highlighting */
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata,
            .token.plain-text {
              color: #6a737d;
            }

            .token.atrule,
            .token.attr-value,
            .token.keyword,
            .token.operator {
              color: #d73a49;
            }

            .token.property,
            .token.tag,
            .token.boolean,
            .token.number,
            .token.constant,
            .token.symbol,
            .token.deleted {
              color: #22863a;
            }

            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: #032f62;
            }

            .token.function,
            .token.class-name {
              color: #6f42c1;
            }

            /* language-specific */

            /* JSX */
            .language-jsx .token.punctuation,
            .language-jsx .token.tag .token.punctuation,
            .language-jsx .token.tag .token.script,
            .language-jsx .token.plain-text {
              color: #24292e;
            }

            .language-jsx .token.tag .token.attr-name {
              color: #6f42c1;
            }

            .language-jsx .token.tag .token.class-name {
              color: #005cc5;
            }

            .language-jsx .token.tag .token.script-punctuation,
            .language-jsx .token.attr-value .token.punctuation:first-child {
              color: #d73a49;
            }

            .language-jsx .token.attr-value {
              color: #032f62;
            }

            .language-jsx span[class="comment"] {
              color: pink;
            }

            /* HTML */
            .language-html .token.tag .token.punctuation {
              color: #24292e;
            }

            .language-html .token.tag .token.attr-name {
              color: #6f42c1;
            }

            .language-html .token.tag .token.attr-value,
            .language-html
              .token.tag
              .token.attr-value
              .token.punctuation:not(:first-child) {
              color: #032f62;
            }

            /* CSS */
            .language-css .token.selector {
              color: #6f42c1;
            }

            .language-css .token.property {
              color: #005cc5;
            }
          `}
      </style>
    </Layout>
  );
}
