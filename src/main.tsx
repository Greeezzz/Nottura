import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Playground from "./pages/Playground";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {location.hash === "#/playground" ? <Playground /> : <App />}
  </StrictMode>,
);

