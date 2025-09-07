// theme.js
import React from "react";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState, createContext, useContext } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#1976d2" },
          secondary: { main: "#9c27b0" },
        },
        typography: {
          fontFamily: ["Inter", "Roboto", "sans-serif"].join(","),
        },
      }),
    [mode]
  );
  return [theme, colorMode, mode, setMode];
};

export const ColorModeProvider = ({ children }) => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* ThemeProvider is applied in main.jsx, so here we only pass children */}
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
