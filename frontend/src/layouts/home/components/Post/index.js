import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Image = styled("img")`
    width: 100%;
    max-height: 400px;
`;

const Post = ({ post, key }) => {
    const imageURL = `http://localhost:8000/images/${post.postPicture}`;

    return (
        <SuiBox pb={5}>
            {post.postPicture && (
                <Image src={imageURL} alt="post" width="100%" />
            )}
            <hr />
            <SuiTypography className="title" sx={{ fontSize: 35 }}>
                {post.title}
            </SuiTypography>
            <SuiBox sx={{ position: "relative" }}>
                <SuiTypography
                    className="title"
                    sx={{ fontSize: 15, fontStyle: "italic" }}
                    opacity={0.8}
                >
                    {post.username}
                </SuiTypography>
                <SuiTypography
                    className="title"
                    opacity="0.7"
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        fontSize: 15,
                        fontStyle: "italic",
                    }}
                >
                    {new Date(post.updatedAt).toDateString()}
                </SuiTypography>
            </SuiBox>
            <hr />
            <SuiTypography className="body" sx={{ fontSize: 18 }}>
                {post.content.slice(0, 200)}...
            </SuiTypography>
            <SuiBox
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingTop: 1,
                }}
            >
                <Link to={`/post/${post._id}`}>
                    <SuiButton variant="text" color="dark">
                        Read more
                        <ArrowForwardIcon />
                    </SuiButton>
                </Link>
            </SuiBox>
        </SuiBox>
    );
};

export default Post;
