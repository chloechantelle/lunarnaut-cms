import { PostContent } from "../lib/projects";
import Date from "./Date";
import { parseISO } from "date-fns";
import { Grid, Paper, Typography } from "@mui/material";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Paper square variant="outlined" sx={{padding: 3, margin: 2}} >
      <Grid item xs={3} className="item">
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
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
          </style>
        </a>
      </Grid>
    </Paper>
  );
}
