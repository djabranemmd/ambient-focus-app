import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

import { FocusProvider } from "./context/FocusContext";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import {
  NavigationProvider,
} from "./context/NavigationContext.jsx";

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <ThemeProvider>
      <FocusProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </FocusProvider>
    </ThemeProvider>
  </StrictMode>
);