import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeButtonSingle } from "./DarkModeButton";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

export const TopNav = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home", to: "/" },
    { text: "To Do List", to: "/todo" },
    { text: "Civil Engineering Helper", to: "/joegpt" },
    { text: "Techplanner", to: "/tech-planner" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Toolbar>
          <DarkModeButtonSingle />
          {isSmallScreen ? (
            <>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.background.default,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItem
                      button
                      key={item.text}
                      component={RouterLink}
                      to={item.to}
                      onClick={handleDrawerToggle}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" alignItems={"center"} flexBasis={"content"}>
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  color={theme.palette.background.default}
                  component={RouterLink}
                  to={item.to}
                  sx={{ marginLeft: theme.spacing(2) }}
                >
                  {item.text}
                </Link>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
