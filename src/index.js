import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyle from "./Styles/GlobalStyle";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/";

const store = createStore(rootReducer);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
