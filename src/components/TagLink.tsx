import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    // <Link href={"/projects/tags/[[...slug]]"} as={`/projects/tags/${tag.slug}`}>
      <a href={"/projects/tags/[[...slug]]"}>{"#" + tag.name}</a>
    // </Link>
  );
}
