import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import AppContext from "./Appcontext"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
)
