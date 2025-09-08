import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
          px: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            sx={{
              color: "white",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: 1,
            }}
          >
            Rohini Patil
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
            {items.map((it) => (
              <Button
                key={it.id}
                href={`#${it.id}`}
                sx={{
                  color: "white",
                  fontWeight: 500,
                  "&:hover": {
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                  },
                }}
              >
                {it.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 220,
            height: "100%",
            background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
            color: "white",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {items.map((it) => (
              <ListItem key={it.id} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${it.id}`}
                  sx={{
                    color: "white",
                    "&:hover": {
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "12px",
                    },
                  }}
                >
                  <ListItemText
                    primary={it.label}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
