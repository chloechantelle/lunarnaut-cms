import { PostContent } from "../lib/projects";
import Date from "./Date";
import { parseISO } from "date-fns";
import { Grid, Paper, Typography } from "@mui/material";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
      <Grid item xs={3} className="item" sx={{padding: 3, margin: 2}}>
        <a href={"/projects/" + post.slug}>
          <Date date={parseISO(post.date)} />
          <Typography variant="h5" component="h5" noWrap>
            {post.title}
          </Typography>
          <img src={post.thumbnailUrl} />
          <style jsx>
            {`
            .item {
              margin: 0 1rem;
            }
            a {
              display: inline-block;
              color: #000;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
          </style>
        </a>
      </Grid>
  );
}
