import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";

import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbar";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
    styled,
    Icon,
    Card,
    CardMedia,
    Tooltip,
    IconButton,
} from "@mui/material";

import "./index.css";
import axios from "axios";
import { Context } from "../../UserContext";

const SinglePost = () => {
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [postPicture, setPostPicture] = useState("");
    const [editMode, setEditMode] = useState(false);
    const imagePath = `http://localhost:8000/images/`;

    // UseEffect to fetch specific post data based on the post ID in url.
    useEffect(() => {
        axios.get(`/post/${postId}`).then((res) => {
            setTitle(res.data.title);
            setContent(res.data.content);
            setPostPicture(res.data.postPicture);
        });
    }, [postId]);

    // Handle Deleting the post
    const handleDelete = () => {
        axios.delete(`/post/${postId}`).then((res) => {
            window.location = "/home";
        });
    };

    // Handle Submit after editing the post
    const handleUpdate = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content,
            postPicture,
            username: user.username,
        };
        axios
            .post(`/post/${postId}`, newPost)
            .then((res) => {
                setEditMode(false);
                window.location.reload();
            })
            .catch((error) => console.log(error));
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
            {editMode && (
                <SuiBox
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 5,
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
                </SuiBox>
            )}
            {postPicture && (
                <Card
                    sx={{
                        paddingY: 2,
                        boxShadow: "none",
                    }}
                >
                    <CardMedia
                        component="img"
                        image={imagePath + postPicture}
                        sx={{ margin: 0, padding: 0, maxHeight: 400 }}
                    />
                </Card>
            )}
            {!editMode && (
                <SuiBox sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={(e) => setEditMode(true)}>
                        <Tooltip title="Edit">
                            <EditIcon sx={{ marginRight: 1 }} />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                        <Tooltip title="Delete">
                            <DeleteIcon color="error" />
                        </Tooltip>
                    </IconButton>
                </SuiBox>
            )}
            {editMode ? (
                <>
                    <SuiBox
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingX: 4,
                        }}
                    >
                        <SuiInput
                            className="title"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            multiline
                            value={title}
                            inputProps={{
                                style: { fontSize: 35 },
                            }}
                        />
                    </SuiBox>
                    <SuiBox
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingX: 4,
                        }}
                    >
                        <SuiInput
                            className="content"
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Express yourself here..."
                            multiline
                            value={content}
                            inputProps={{
                                style: { fontSize: 18 },
                            }}
                        />
                    </SuiBox>
                </>
            ) : (
                <>
                    <SuiTypography
                        className="title"
                        sx={{ fontSize: 35, paddingX: 4, paddingBottom: 2 }}
                    >
                        {title}
                    </SuiTypography>
                    <SuiTypography
                        className="content"
                        sx={{ fontSize: 18, paddingX: 4 }}
                    >
                        {content}
                    </SuiTypography>
                </>
            )}
        </HomeLayout>
    );
};

export default SinglePost;
