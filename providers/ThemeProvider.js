import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {},
  fonts: {
      primary: "'Poppins', sans-serif",
      secondary: "'Work Sans', Sans-Serif",
      alt: "'Open Sans', Serif"
  }
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
