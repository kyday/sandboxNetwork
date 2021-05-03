import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyle from "./Styles/GlobalStyle";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
