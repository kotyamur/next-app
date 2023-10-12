"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";

const HomeIconLink = () => {
  const pathname = usePathname();
  return (
    <>
      <Box sx={{ marginRight: 2, display: { xs: "none", sm: "flex" } }}>
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          <HomeIcon />
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
        <Link href="/">
          <HomeIcon />
        </Link>
      </Box>
    </>
  );
};

export { HomeIconLink };