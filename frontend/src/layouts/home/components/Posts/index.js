import { Grid } from "@mui/material";
import Post from "layouts/home/components/Post";
import Masonry from "@mui/lab/Masonry";

const Posts = ({ posts }) => {
    return (
        <Masonry columns={{ lg: 3, md: 2, sm: 2, xs: 1 }} spacing={5}>
            {posts.map((post) => (
                <Post post={post} key={post._id} />
            ))}
        </Masonry>
    );
};

export default Posts;
