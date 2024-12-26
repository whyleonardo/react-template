import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@/styles/globals.css"

import { App } from "@/app"

// biome-ignore lint/style/noNonNullAssertion: No assertion needed here
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
