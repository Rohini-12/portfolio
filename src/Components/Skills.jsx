import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { SiVuedotjs, SiTypescript, SiGit } from "react-icons/si";
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejs } from "react-icons/di";

const skills = [
  { name: "React.js", icon: <DiReact size={50} color="#61dafb" /> },
  { name: "Vue.js", icon: <SiVuedotjs size={50} color="#42b883" /> },
  { name: "JavaScript", icon: <DiJavascript1 size={50} color="#f7df1e" /> },
  { name: "HTML5", icon: <DiHtml5 size={50} color="#e34f26" /> },
  { name: "CSS3", icon: <DiCss3 size={50} color="#2965f1" /> },
  { name: "Node.js", icon: <DiNodejs size={50} color="#68a063" /> },
  { name: "TypeScript", icon: <SiTypescript size={50} color="#3178c6" /> },
  { name: "Git", icon: <SiGit size={50} color="#f1502f" /> },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
        p: 14,
      }}
    >
      <Typography variant="h3" mb={4} fontWeight="bold">
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
  {skills.map((skill, index) => (
    <Grid item xs={6} sm={3} key={index}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 }}
      >
        <Paper
          sx={{
            p: 3,
            width: 160,
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "0.3s",
              boxShadow: "0px 4px 15px rgba(100,255,218,0.5)",
            },
          }}
        >
          {skill.icon}
         <Typography sx={{ fontSize: "1.4rem" }} mt={2}>
          {skill.name}
        </Typography>

        </Paper>
      </motion.div>
    </Grid>
  ))}
</Grid>

    </Box>
  );
};

export default Skills;
