import "./styles/index.scss";
import "./config/i18nconfig.ts";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { themeConfig } from "./config/ThemeConfig.ts";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import storeRedux from "./redux/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <BrowserRouter>
        <ThemeProvider theme={themeConfig}>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
