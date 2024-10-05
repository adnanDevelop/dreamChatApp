import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Css filess

import "./css/global.css";
import "./css/App.css";

// Components
import ToastProvider from "./components/ui/toast/Toast.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider />
    <App />
  </StrictMode>
);
