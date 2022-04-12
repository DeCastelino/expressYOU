import { useState, useContext } from "react";
import axios from "axios";

import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbar";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import { Context } from "../../UserContext";

import { styled, Icon, Grid, Card, CardMedia } from "@mui/material";

import "./index.css";

const Input = styled("input")({
    display: "none",
});

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postInfo = {
            title,
            content,
            username: user.username,
        };
        if (file !== null) {
            const data = new FormData();
            const filename = Date.now() + "-" + file.name;
            data.append("name", filename);
            data.append("file", file);
            postInfo.postPicture = filename;
            axios
                .post("/upload", data)
                .then((res) => {})
                .catch((err) => {
                    console.log(err);
                });
        }

        axios
            .post("/createPost", postInfo)
            .then((res) => {
                console.log(res.data);
                window.location.replace(`/post/${res.data._id}`);
            })
            .catch((err) => {
                console.log(err);
            });
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
            <Grid
                container
                spacing={2}
                sx={{ display: "flex", paddingX: 15, paddingBottom: 2 }}
            >
                <Grid
                    item
                    sx={{
                        display: "flex",
                        marginLeft: "auto",
                        marginRight: 6,
                    }}
                >
                    <SuiButton
                        variant="outlined"
                        color="success"
                        size="small"
                        circular
                        onClick={handleSubmit}
                    >
                        Publish
                    </SuiButton>
                </Grid>
            </Grid>
            <Card
                sx={{
                    marginLeft: 14,
                    marginRight: 15,
                    marginBottom: 2,
                }}
            >
                {file && (
                    <CardMedia
                        component="img"
                        image={URL.createObjectURL(file)}
                        sx={{ margin: 0, padding: 0, maxHeight: 400 }}
                    />
                )}
            </Card>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    marginLeft: 5,
                }}
            >
                <Grid
                    item
                    sx={{
                        marginY: "auto",
                    }}
                >
                    <label>
                        <Input
                            accept="image/*"
                            id="file"
                            name="file"
                            type="file"
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                            }}
                        />
                        <Icon color="dark" fontSize="large">
                            add_circles
                        </Icon>
                    </label>
                </Grid>
                <Grid item xs={10}>
                    <SuiInput
                        className="title"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        multiline
                        autoFocus
                        sx={{ marginRight: 10 }}
                        inputProps={{
                            style: { fontSize: 40 },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    paddingLeft: 11,
                    paddingRight: 17,
                    margin: 0,
                }}
            >
                <Grid item xs={12}>
                    <SuiInput
                        className="body"
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Express yourself here..."
                        multiline
                        inputProps={{
                            style: { fontSize: 20 },
                        }}
                    />
                </Grid>
            </Grid>
        </HomeLayout>
    );
};

export default CreatePost;
