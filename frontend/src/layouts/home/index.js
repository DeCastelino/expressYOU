// MUI Components
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Tooltip, Fab, Grid } from "@mui/material";

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
            <Grid container spacing={3} pt={5}>
                <Grid item xs={12}>
                    <Posts posts={posts} />
                </Grid>
                <Tooltip title="Create">
                    <Fab
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
            </Grid>
        </HomeLayout>
    );
}

export default Home;
