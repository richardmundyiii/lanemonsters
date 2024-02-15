import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileImage from "../../images/defaultProfileImage.jpeg";

export default function NavBar({ user }) {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Tournaments", path: "/tournaments" },
    { title: "Contact", path: "/contact" },
    { title: "Shop", path: "/shop" },
    { title: "Find An Alley", path: "/alleys" },
  ];

  const [userMenu, setUserMenu] = useState(null);
  const open = Boolean(userMenu);

  const handleOpenMenu = (event) => {
    setUserMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setUserMenu(null);
  };

  // Prepare menu items based on user's login state
  const menuItems = user
    ? [
        <MenuItem
          key="profile"
          component={Link}
          to="/profile"
          onClick={handleCloseMenu}
        >
          Profile
        </MenuItem>,
        <MenuItem key="logout" onClick={handleCloseMenu}>
          Logout
        </MenuItem>,
      ]
    : [
        <MenuItem
          key="login"
          component={Link}
          to="/auth"
          onClick={handleCloseMenu}
        >
          Login
        </MenuItem>,
      ];

  return (
    <>
      <Container sx={{ mb: 10 }}>
        <AppBar position="fixed" color="primary" sx={{ width: "100%" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              {navLinks.map(({ title, path }) => (
                <Button color="inherit" key={title} component={Link} to={path}>
                  {title}
                </Button>
              ))}
            </Box>
            <Box>
              <Button
                id="user-menu-button"
                aria-controls={open ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleOpenMenu}
                sx={{ color: "inherit" }}
              >
                {user ? (
                  <Box
                    component="img"
                    src={ProfileImage}
                    alt="profile image"
                    sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                ) : (
                  <AccountCircleIcon />
                )}
              </Button>
              <Menu
                id="user-menu"
                anchorEl={userMenu}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{ "aria-labelledby": "user-menu-button" }}
              >
                {menuItems}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
