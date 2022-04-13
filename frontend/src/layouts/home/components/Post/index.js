import { useEffect, useState } from "react";

import "./index.css";

import { Card, CardMedia, Grid } from "@mui/material";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";

const Post = ({ post, key }) => {
    const imageURL = `http://localhost:8000/images/${post.postPicture}`;

    return (
        <Card
            sx={{
                boxShadow: 5,
                borderRadius: 1,
                height: 200,
                dispaly: "flex",
                flexDirection: "row",
                position: "relative",
            }}
        >
            <SuiBox p={1}>
                <SuiBox sx={{ display: "flex", gap: 2 }}>
                    <SuiTypography variant="caption">
                        {post.username}
                    </SuiTypography>
                    <SuiTypography variant="caption" opacity="0.7">
                        {post.updatedAt}
                    </SuiTypography>
                </SuiBox>
                <SuiTypography variant="h3">{post.title}</SuiTypography>
            </SuiBox>
            <SuiBox
                sx={{
                    backgroundImage: `url(${imageURL})`,
                    position: "absolute",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    right: 0,
                    width: { lg: 250, xs: 200 },
                    // height: { lg: 250, xs: 50 },
                }}
            ></SuiBox>
        </Card>
    );
};

export default Post;
