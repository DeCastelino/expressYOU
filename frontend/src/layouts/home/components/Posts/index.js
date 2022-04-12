import { Grid } from "@mui/material";
import Post from "layouts/home/components/Post";

const Posts = ({ posts }) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            {posts.map((post) => (
                <Grid item xs={3}>
                    <Post post={post} key={post._id} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
