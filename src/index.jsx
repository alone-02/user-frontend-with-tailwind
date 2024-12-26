import React from "react";
import { createRoot } from "react-Dom/client";
import App from "./App";
import { StrictMode } from "react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);