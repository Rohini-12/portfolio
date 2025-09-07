import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
    id="about"
    sx={{
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 3,
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    p: 3,
    margin: 0,
  }}
>

      <Typography variant="h4" fontWeight="bold">
        About Me
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "700px", lineHeight: 1.7 }}>
        Frontend Engineer with 4.4 years of experience specializing in React.js and Vue.js.
        Proven expertise in building scalable and dynamic web applications with strong skills in 
        state management (Redux, Vuex), REST API integration, responsive UI development, and 
        performance optimization. Hands-on experience with Agile/Scrum, test-driven development, 
        and modern frontend ecosystems.
      </Typography>
    </Box>
  );
};

export default About;
