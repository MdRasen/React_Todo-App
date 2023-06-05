import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // To solve the double calling issues -> Comment the <React.StricMode>
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
