import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import "./index.css"
import App from "./App.jsx"
import { AuthProvider } from "./context/AuthContext.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <StrictMode>
        <App />
        <Toaster position="top-center" />
      </StrictMode>
    </AuthProvider>
  </BrowserRouter>
)