"use client";
import { Metadata } from "next";

import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/getPosts";
import { Posts } from "@/components/Posts";

import Typography from "@mui/material/Typography";
import { PostSearch } from "@/components/PostSearch";

const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then(setPosts).finally(() => setLoading(false));
  }, [])

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h1">
        Blog page
      </Typography>
      <PostSearch onSearch={setPosts}/>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <Posts posts={posts} />
      )}
    </>
  );
}
