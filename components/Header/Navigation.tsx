"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";

type NavLinks = {
  label: string;
  href: string;
};

type Props = {
    navLinks: NavLinks[];
}

const Navigation = ({ navLinks }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return (
      <>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
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
            {navLinks.map((link) => {
              return (
                <MenuItem onClick={handleCloseNavMenu} key={link.label}>
                  <Link href={link.href}>
                    <Typography textAlign="center">{link.label}</Typography>
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  href={link.href}
                  className={`link ${isActive ? "active" : ""}`}
                >
                  <Typography textAlign="center">{link.label}</Typography>
                </Link>
              </Button>
            );
          })}
        </Box>
      </>
    );
};

export { Navigation };
