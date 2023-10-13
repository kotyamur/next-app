"use client";
import useSWR from "swr"; 

// import { useEffect } from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { getAllPosts } from "@/services/getPosts";
// import { usePosts } from "@/store";
// import { shallow } from "zustand/shallow";

const Posts = () => {
    const { data: posts, isLoading } = useSWR("posts", getAllPosts);
    // const [posts, loading, getAllPosts] = usePosts(
    //   (state) => [state.posts, state.loading, state.getAllPosts],
    //   shallow
    // );
    // useEffect(() => {
    //   getAllPosts();
    // }, [getAllPosts]);
    return (
      <>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <List>
            {posts.map((post: any) => (
              <ListItem key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </ListItem>
            ))}
          </List>
        )}
      </>
    );
};

export { Posts };
