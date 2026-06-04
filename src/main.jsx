import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import { FocusProvider } from "./context/FocusContext";

createRoot(
  document.getElementById(
    "root"
  )
).render(
  <StrictMode>
    <FocusProvider>
      <App />
    </FocusProvider>
  </StrictMode>
);