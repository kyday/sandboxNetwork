import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyle from "./Styles/GlobalStyle";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/reducers/";
import { loadState, saveState } from "./utils/localStorage/localStorage";
import thunk from "redux-thunk";

const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
