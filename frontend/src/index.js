import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { UserContext } from "./UserContext";

// Soft UI home React Context Provider
import { SoftUIControllerProvider } from "context";

ReactDOM.render(
    <BrowserRouter>
        <SoftUIControllerProvider>
            <UserContext>
                <App />
            </UserContext>
        </SoftUIControllerProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
