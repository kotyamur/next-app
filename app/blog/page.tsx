import type { Metadata } from "next";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });
    if (!response.ok) {
      throw new Error("Unable to fetch posts");
    }
    return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
    const posts = await getData();
    
    return (
      <>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h1">
          Blog page
        </Typography>
        <List>
          {posts.map((post: any) => (
            <ListItem key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </>
    );
}
