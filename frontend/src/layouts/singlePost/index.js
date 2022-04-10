import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbar";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";

import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { IconButton, Paper } from "@mui/material";

import "./index.css";
import axios from "axios";

const Input = styled("input")({
    display: "none",
});

const SinglePost = () => {
    const location = useLocation();
    // const postId = location.pathname.split("/")[2];

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [files, setFile] = useState({
        file: null,
        updatedFile: null,
    });
    const [postCreator, setPostCreator] = useState("");
    const [username, setUsername] = useState("");
    const [editable, setEditable] = useState(false);
    const [postId, setPostId] = useState(location.pathname.split("/")[2]);

    // UseEffect to fetch specific post data based on the post ID in url.
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) window.location = "/authentication/sign-in";
        const userInfo = JSON.parse(user);
        setUsername(userInfo.username);

        axios.get(`http://localhost:8000/posts/${postId}`).then((res) => {
            setTitle(res.data.postDetails.title);
            setBody(res.data.postDetails.message);
            setFile({
                file: res.data.postDetails.postPicture,
                updatedFile: res.data.postDetails.postPicture,
            });
            setPostCreator(res.data.username);
        });
    }, [postId]);

    // Handle Deleting the post
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/posts/${postId}`).then((res) => {
            window.location = "/home";
        });
    };

    // Handle Submit after editing the post
    const handleUpdate = (e) => {
        e.preventDefault();
        // if file name is changed, then upload the new file
        const newPost = { title, message: body, username };
        if (!files.file.includes("storage.googleapis.com")) {
            const data = new FormData();
            const filename = Date.now() + files.updatedFile.name;
            data.append("name", filename);
            data.append("file", files.updatedFile);
            axios
                .post("http://localhost:8000/upload", data)
                .then((res) => {
                    newPost.image = res.data;
                    console.log("Public URL: ", res.data);
                    axios
                        .post(`http://localhost:8000/posts/${postId}`, newPost)
                        .then((res) => {
                            setEditable(false);
                            window.location.reload();
                        });
                })
                .catch((error) => console.log(error));
        } else {
            axios
                .post(`http://localhost:8000/posts/${postId}`, newPost)
                .then((res) => {
                    setEditable(false);
                    window.location.reload();
                });
        }
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
            {editable && (
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
                            onClick={handleUpdate}
                        >
                            Update
                        </SuiButton>
                    </Grid>
                </Grid>
            )}
            <Card
                sx={{
                    marginLeft: 14,
                    marginRight: 15,
                    marginBottom: 2,
                    boxShadow: 0,
                }}
            >
                {files.file && (
                    <CardMedia
                        component="img"
                        image={files.file}
                        sx={{ margin: 0, padding: 0, maxHeight: 400 }}
                    />
                )}
            </Card>
            {!editable && (
                <Grid
                    container
                    sx={{
                        display: "flex",
                        marginX: 5,
                        paddingRight: 24,
                        justifyContent: "end",
                    }}
                >
                    <IconButton onClick={(e) => setEditable(true)}>
                        <Tooltip title="Edit" placement="top">
                            <EditIcon
                                fontSize="large"
                                sx={{ marginRight: 2 }}
                            />
                        </Tooltip>
                    </IconButton>

                    <IconButton onClick={handleDelete}>
                        <Tooltip title="Delete" placement="top">
                            <DeleteIcon fontSize="large" color="error" />
                        </Tooltip>
                    </IconButton>
                </Grid>
            )}
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    marginX: 5,
                }}
            >
                {editable && (
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
                                    setFile({
                                        file: URL.createObjectURL(
                                            e.target.files[0]
                                        ),
                                        updatedFile: e.target.files[0],
                                    });
                                }}
                            />
                            <Icon color="dark" fontSize="large">
                                add_circles
                            </Icon>
                        </label>
                    </Grid>
                )}
                <Grid item xs={10}>
                    {editable ? (
                        <SuiInput
                            className="title"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            multiline
                            value={title}
                            sx={{
                                marginRight: 10,
                            }}
                            inputProps={{
                                style: { fontSize: 40 },
                            }}
                        />
                    ) : (
                        <SuiTypography variant="h1" sx={{ paddingX: 8 }}>
                            {title}
                        </SuiTypography>
                    )}
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    marginY: 1,
                    marginX: 5,
                }}
            >
                <Grid item xs={10} mx={8}>
                    {editable ? (
                        <SuiInput
                            className="body"
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Express yourself here..."
                            multiline
                            value={body}
                            inputProps={{
                                style: { fontSize: 20 },
                            }}
                        />
                    ) : (
                        <SuiTypography className="body" variant="body1">
                            {body}
                        </SuiTypography>
                    )}
                </Grid>
            </Grid>
        </HomeLayout>
    );
};

export default SinglePost;
