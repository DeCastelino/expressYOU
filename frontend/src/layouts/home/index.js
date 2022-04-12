// MUI Components
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Tooltip, Fab } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

// Soft UI home React components
import SuiBox from "components/SuiBox";

// Soft UI home React example components
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbar";
import Posts from "layouts/home/components/Posts";
import { Context } from "../../UserContext";

function Home() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        axios
            .get(`/posts`, { params: { username: user.username } })
            .then((res) => {
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
                    aria-label="add"
                    sx={{
                        position: "fixed",
                        bottom: 30,
                        right: 30,
                        backgroundColor: "#344767",
                        ":hover": { backgroundColor: "#344767" },
                    }}
                    onClick={handleCreatePost}
                >
                    <AddIcon color="white" fontSize="medium" />
                </Fab>
            </Tooltip>
        </HomeLayout>
    );
}

export default Home;
