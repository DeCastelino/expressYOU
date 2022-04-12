import { useEffect, useState } from "react";

import { Card } from "@mui/material";
import SuiTypography from "components/SuiTypography";

const Post = ({ post, key }) => {
    return (
        <Card>
            <SuiTypography variant="h6">{post.username}</SuiTypography>
            <SuiTypography variant="h6">{post.updatedAt}</SuiTypography>
        </Card>
    );
};

export default Post;
