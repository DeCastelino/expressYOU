import { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

// Soft UI home React components
import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";

// Soft UI home React example components
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import BasicInfo from "layouts/profile/components/BasicInfo";
import ChangePassword from "layouts/profile/components/ChangePassword";

// Overview page components
import Header from "layouts/profile/components/Header";

import { styled } from "@mui/material/styles";

const Input = styled("input")({
    display: "none",
});

function Overview() {
    const [profilePicture, setProfilePicture] = useState("");
    const [username, setUsername] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) window.location = "/authentication/sign-in";
        const userInfo = JSON.parse(user);
        setProfilePicture(userInfo.profilePicture);
        setUsername(userInfo.username);
        setUser(userInfo);
    }, []);

    const uploadProfilePicture = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        data.append("username", username);
        axios.post("http://localhost:8000/profile/upload", data).then((res) => {
            user["profilePicture"] = res.data;
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();
        });
    };

    return (
        <HomeLayout>
            <Header />
            <SuiBox
                sx={{
                    display: "flex",
                    // flexDirection: "column",
                    paddingTop: 5,
                    gap: 3,
                }}
            >
                <Card
                    sx={{
                        paddingY: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "sticky",
                        top: 0,
                        width: `30vw`,
                        height: `50vh`,
                    }}
                >
                    <Avatar
                        src={profilePicture}
                        sx={{
                            width: 250,
                            height: 250,
                        }}
                    />
                    <label align="center">
                        <Input
                            accept="image/*"
                            id="file"
                            name="file"
                            type="file"
                            onChange={uploadProfilePicture}
                        />
                        <SuiButton
                            variant="gradient"
                            color="dark"
                            component="span"
                            sx={{ marginTop: 4 }}
                            width={50}
                        >
                            Upload
                        </SuiButton>
                    </label>
                </Card>
                <Grid container spacing={3} sx={{ widht: `70vw` }}>
                    <Grid item xs={12}>
                        <BasicInfo />
                    </Grid>
                    <Grid item xs={12}>
                        <ChangePassword username={username} />
                    </Grid>
                </Grid>
            </SuiBox>
        </HomeLayout>
    );
}

export default Overview;
