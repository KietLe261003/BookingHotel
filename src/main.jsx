import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import { AuthContextProvider } from "./Comomon/Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </Router>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
