import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./Context/UserProvider.jsx";
import FileProvider from "./Context/FileProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FileProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </FileProvider>
  </React.StrictMode>
);
