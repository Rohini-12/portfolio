import { Box, Button, Typography } from "@mui/material";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const resumePath = `${import.meta.env.BASE_URL}assets/resume/Rohini_Patil_Resume.pdf`;

  const handleDownload = () => {
    window.open(resumePath, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Rohini_Patil_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="hero"
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
      <Typography variant="h3" fontWeight="bold">
        Hi, I’m Rohini
      </Typography>

      <TypingEffect />

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            borderRadius: "25px",
            px: 3,
            py: 1,
          }}
          href="#contact"
        >
          Let’s Connect
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#64ffda",
            color: "#64ffda",
            borderRadius: "25px",
            px: 3,
            py: 1,
            "&:hover": { backgroundColor: "rgba(100,255,218,0.1)" },
          }}
          onClick={handleDownload}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
