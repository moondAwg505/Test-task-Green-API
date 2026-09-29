import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

import "./style/global.css";
import { AuthProvider } from "./context/AutchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
