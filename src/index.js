import { ChakraProvider } from "@chakra-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
