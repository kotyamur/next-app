import { useState, FormEventHandler } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { getPostsBySearch } from "@/services/getPosts";

type Props = {
    onSearch: (value: any[]) => void;
}

const PostSearch = ({onSearch}: Props) => {
    const [search, setSearch] = useState("");
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const posts = await getPostsBySearch(search);
        onSearch(posts);
    }
  return (
    <Paper onSubmit={handleSubmit}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export { PostSearch };
