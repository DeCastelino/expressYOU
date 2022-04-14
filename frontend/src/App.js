import { useEffect, useContext } from "react";

// react-router components
import { Routes, Route, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";

// Soft UI home PRO React themes
import theme from "assets/theme";

// Soft UI home PRO React contexts
import { useSoftUIController } from "context";

import Home from "layouts/home";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import CreatePost from "layouts/createPost";
import SinglePost from "layouts/singlePost";
import { Context } from "./UserContext";

export default function App() {
    const [controller, dispatch] = useSoftUIController();
    const { direction, openConfigurator } = controller;
    const { pathname } = useLocation();
    const { user } = useContext(Context);

    // Setting the dir attribute for the body element
    useEffect(() => {
        document.body.setAttribute("dir", direction);
    }, [direction]);

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route exact path="/" element={user ? <Home /> : <SignIn />} />
                <Route path="/home" element={user ? <Home /> : <SignIn />} />
                <Route
                    path="/createPost"
                    element={user ? <CreatePost /> : <SignIn />}
                />
                <Route
                    path="/post/:postId"
                    element={user ? <SinglePost /> : <SignIn />}
                />
                <Route
                    path="/authentication/sign-up"
                    element={user ? <Home /> : <SignUp />}
                />
                <Route
                    path="/authentication/sign-in"
                    element={user ? <Home /> : <SignIn />}
                />
                <Route
                    path="/profile"
                    element={user ? <Profile /> : <SignIn />}
                />
                <Route path="*" element={user ? <Home /> : <SignIn />} />
            </Routes>
        </ThemeProvider>
    );
}
