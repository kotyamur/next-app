import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post: any) => (
        <ListItem key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export {Posts}