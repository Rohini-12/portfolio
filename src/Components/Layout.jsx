import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 3,
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
