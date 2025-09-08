import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Walmart Kiosk Application",
    desc: `Developed the Kiosk mode of an e-commerce application for selling customizable print products globally.          
          Implemented multi-step workflows (upload, customization, preview, billing).                     
          Focused on global modals, complex UI interactions, and performance optimizations for a smooth user experience.`,
  },
  {
    title: "World Archive Platform",
    desc: `Contributed to a platform focused on preserving family history via a tree-structured web interface.
          Enabled users to add and organize family data, images, and stories with seamless navigation and data binding.`,
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 6,
      }}
    >
      <Typography variant="h3" mb={4} fontWeight="bold">
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          fontSize: "1.4rem",
          width: "100%",
          maxWidth: "1200px",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr"  
          },
        }}
      >
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <Card
              sx={{
                height: "100%",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "0.3s",
                  boxShadow: "0px 4px 15px rgba(7, 48, 38, 0.5)",
                },
              }}
            >
              <CardContent sx={{ fontSize: "2rem", flex: 1 }}>
                <Typography variant="h5" fontWeight="bold">
                  {proj.title}
                </Typography>
                <Typography variant="body2" mt={1}  sx={{ fontSize: "1.2rem" }}>
                  {proj.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
