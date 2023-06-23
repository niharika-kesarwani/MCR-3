import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SnackProvider, useSnack } from "./contexts/snack-context.jsx";

export { useSnack };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackProvider>
      <App />
    </SnackProvider>
  </React.StrictMode>
);
