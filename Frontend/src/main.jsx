import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { AuthProvider } from "./context/Auth.context";
import { WorkspaceProvider } from "./context/Workspace.context";
import "../index.css";


ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <BrowserRouter>

            <AuthProvider>

                <WorkspaceProvider>

                    <App />

                </WorkspaceProvider>

            </AuthProvider>

        </BrowserRouter>

    </React.StrictMode>

);