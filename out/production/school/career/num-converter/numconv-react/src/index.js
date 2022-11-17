import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomePage from './WelcomePage';
import reportWebVitals from './reportWebVitals';
import ContinueButton from './Continue_button';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const themeDark = createTheme({
  palette: {
    background: {
      default: "#181818",
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
    </ThemeProvider>
    <WelcomePage />
    <ContinueButton />
  </React.StrictMode>
);

reportWebVitals();