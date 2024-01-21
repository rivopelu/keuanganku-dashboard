import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { themeConfig } from "./config/ThemeConfig.ts";

import "./styles/index.scss";
import "./config/i18nconfig.ts";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeConfig}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
