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
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Post post={post} key={post._id} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
