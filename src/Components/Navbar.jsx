import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Navbar() {

  const items = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
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
      </Toolbar>
    </AppBar>
  );
}
