import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Playground from "./pages/Playground";
import { Terms } from "./pages/Terms";

function renderPage() {
  if (location.hash === "#/playground") return <Playground />;
  if (location.pathname === "/syarat-ketentuan" || location.hash === "#/syarat-ketentuan") {
    return <Terms />;
  }
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{renderPage()}</StrictMode>,
);
