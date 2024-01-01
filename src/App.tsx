// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import CssBaseline from "@mui/material/CssBaseline";
import { AboutMe } from "./components/AboutMe";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useContext } from "react";
import { DarkModeContext, DarkModeProvider } from "./contexts/DarkModeContext";
import { DarkModeToggleWithLabel } from "./components/DarkModeToggleWithLabel";
import { Box } from "@mui/material";

const OuterApp = () => {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
};

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      // secondary: "#ffffff"
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <DarkModeToggleWithLabel />
      <Box sx={{ padding: "2rem" }}>
        {/* routing here */}
        <AboutMe />
      </Box>
    </ThemeProvider>
  );
};

export default OuterApp;
