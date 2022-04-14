import { useState, useContext } from "react";
import axios from "axios";

import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbar";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";

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
            <SuiBox
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 5,
                    paddingBottom: 2,
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
            </SuiBox>
            <Card
                sx={{
                    marginBottom: 2,
                    boxShadow: "none",
                }}
            >
                {file && (
                    <CardMedia
                        component="img"
                        image={URL.createObjectURL(file)}
                        sx={{
                            margin: 0,
                            padding: 0,
                            maxHeight: 400,
                        }}
                    />
                )}
            </Card>
            <SuiBox sx={{ display: "flex", alignItems: "center" }}>
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
                <SuiInput
                    className="title"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    multiline
                    autoFocus
                    inputProps={{
                        style: { fontSize: 35 },
                    }}
                />
            </SuiBox>
            <SuiBox sx={{ paddingX: 4 }}>
                <SuiInput
                    className="content"
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Express yourself here..."
                    multiline
                    inputProps={{
                        style: { fontSize: 18 },
                    }}
                />
            </SuiBox>
        </HomeLayout>
    );
};
export default CreatePost;
