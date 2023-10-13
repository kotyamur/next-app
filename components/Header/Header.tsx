// "use client"; 

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { teal } from "@mui/material/colors";
import { HomeIconLink } from "./HomeIcon";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
    return (
      <AppBar position="static" sx={{ backgroundColor: `${teal[500]}` }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HomeIconLink />
            <Navigation navLinks={navItems}/>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export {Header};