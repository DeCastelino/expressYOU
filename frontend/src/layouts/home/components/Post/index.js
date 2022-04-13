import { useEffect, useState } from "react";

import { Card } from "@mui/material";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";

const Post = ({ post, key }) => {
    return (
        <Card sx={{ padding: 2 }}>
            <SuiBox sx={{ display: "flex", gap: 2 }}>
                <SuiTypography variant="caption">{post.username}</SuiTypography>
                <SuiTypography variant="caption" opacity="0.7">
                    {post.updatedAt}
                </SuiTypography>
            </SuiBox>
            <SuiTypography variant="h3">{post.title}</SuiTypography>
        </Card>
    );
};

export default Post;
