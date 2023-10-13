import { Metadata } from "next";

import { Posts } from "@/components/Posts";

import Typography from "@mui/material/Typography";
import { PostSearch } from "@/components/PostSearch";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h1">
        Blog page
      </Typography>
      <PostSearch />
      <Posts />
    </>
  );
}
