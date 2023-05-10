import React, { useState } from "react";
import ReactDOM from "react-dom";
import EmailForm from "./EmailForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Switch,
  Box,
  FormControlLabel,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid
} from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1e88e5"
      },
      secondary: {
        main: "#ff4081"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web3 Email
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            }
            label="Dark Mode"
          />
        </Toolbar>
      </AppBar>
      <Container>
        <Box m={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <EmailForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
