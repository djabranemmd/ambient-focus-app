import {
  StrictMode,
} from "react";


import {
  createRoot,
} from "react-dom/client";


import App from "./App";


import "./index.css";


import {
  ThemeProvider,
} from "./context/ThemeContext.jsx";


import {
  NavigationProvider,
} from "./context/NavigationContext.jsx";


import {
  FocusProvider,
} from "./context/FocusContext.jsx";




const rootElement =
  document.getElementById("root");



if (!rootElement) {

  throw new Error(
    "Root element not found"
  );

}



const root =
  createRoot(
    rootElement
  );



root.render(

  <StrictMode>

    <ThemeProvider>

      <NavigationProvider>

        <FocusProvider>

          <App />

        </FocusProvider>

      </NavigationProvider>

    </ThemeProvider>

  </StrictMode>

);