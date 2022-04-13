import { useEffect, useState } from "react";

import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Post = ({ post, key }) => {
    const imageURL = `http://localhost:8000/images/${post.postPicture}`;

    return (
        <SuiBox pb={5}>
            {post.postPicture && (
                <img src={imageURL} alt="post" width="100%" height="100%" />
            )}
            <hr />
            <SuiTypography className="title" sx={{ fontSize: 35 }}>
                {post.title}
            </SuiTypography>
            <SuiBox sx={{ position: "relative" }}>
                <SuiTypography
                    classname="title"
                    sx={{ fontSize: 15, fontStyle: "italic" }}
                    opacity={0.8}
                >
                    {post.username}
                </SuiTypography>
                <SuiTypography
                    classname="title"
                    opacity="0.7"
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        fontSize: 15,
                        fontStyle: "italic",
                    }}
                >
                    {new Date(post.createdAt).toDateString()}
                </SuiTypography>
            </SuiBox>
            <hr />
            <SuiTypography classname="body" sx={{ fontSize: 18 }}>
                {post.content.slice(0, 200)}...
            </SuiTypography>
            <SuiBox
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <SuiButton variant="text" color="dark">
                    Read more
                    <ArrowForwardIcon />
                </SuiButton>
            </SuiBox>
        </SuiBox>
    );
};

export default Post;
