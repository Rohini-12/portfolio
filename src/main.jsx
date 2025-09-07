import { createRoot } from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeProvider, useMode } from "./theme";
import "./index.css";

function Root() {
  const [theme] = useMode();
  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
