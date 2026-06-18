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
} from "./context/FocusContext";



const rootElement =
  document.getElementById("root");



if (!rootElement) {

  throw new Error(
    "Root element not found"
  );

}



createRoot(rootElement).render(

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