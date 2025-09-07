import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "50vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 3,
        p: 3,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Let’s stay in touch
        </Typography>
      </Box>

      {/* Footer / Email */}
      <Typography variant="body2" sx={{ color: "#d8e7e4ff" }}>
        Email :- rohinirpatil12@gmail.com
      </Typography>
    </Box>
  );
};

export default Contact;
