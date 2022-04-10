// MUI Components
import { useState, useEffect } from "react";
import axios from "axios";

import Tooltip from "@mui/material/Tooltip";

// Soft UI home React components
import SuiBox from "components/SuiBox";

// Soft UI home React example components
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbar";
import Posts from "layouts/home/components/Posts";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/posts").then((res) => {
            setPosts(res.data);
        });
    }, []);

    const handleCreatePost = (e) => {
        e.preventDefault();
        window.location = "/createPost";
    };

    return (
        <HomeLayout>
            <HomeNavbar
                action={{
                    type: "external",
                    route: "/authentication/sign-in",
                    label: "logout",
                    color: "dark",
                }}
            />
            <SuiBox
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Posts posts={posts} />
            </SuiBox>
            <Tooltip title="Create">
                <Fab
                    color="secondary"
                    aria-label="add"
                    sx={{ position: "fixed", bottom: 30, right: 30 }}
                    onClick={handleCreatePost}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
        </HomeLayout>
    );
}

export default Home;
