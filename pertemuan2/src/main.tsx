import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CatatanKeuangan from "./Tugas2/CatatanKeuangan";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CatatanKeuangan />
  </StrictMode>,
);
