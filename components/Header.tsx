"use client"; 
import Link from "next/link"
import { useState } from 'react'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { teal } from "@mui/material/colors";

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
      //   <header>
      //     <Link href="/">Home</Link>
      //     <Link href="/blog">Blog</Link>
      //     <Link href="/about">About</Link>
      //   </header>
      <AppBar position="static" sx={{ backgroundColor: `${teal[500]}` }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ marginRight: 2, display: { xs: "none", sm: "flex" } }}>
              <Link href="/">
                <HomeIcon />
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/blog">
                    <Typography textAlign="center">Blog</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/about">
                    <Typography textAlign="center">About</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <Link href="/">
                <HomeIcon />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href="/blog">
                  <Typography textAlign="center">Blog</Typography>
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href="/about">
                  <Typography textAlign="center">About</Typography>
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export {Header};