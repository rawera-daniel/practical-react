import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Link from "@mui/material/Link";
// import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              component={RouterLink}
              to="/"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Logo
            </Link>
          </Typography>

          <Button color="inherit">
            <Link
              component={RouterLink}
              to="/home"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={RouterLink}
              to="/about"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={RouterLink}
              to="/dashboard"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={RouterLink}
              to="/login"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
