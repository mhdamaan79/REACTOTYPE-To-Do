import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoContextProvider } from "./store/todoContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
