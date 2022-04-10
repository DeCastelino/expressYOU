// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI home PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI home PRO React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

function BasicLayout({ title, description, image, children }) {
    return (
        <PageLayout>
            <SuiBox
                width="calc(100% - 2rem)"
                minHeight="50vh"
                borderRadius="lg"
                mx={2}
                my={2}
                pt={6}
                pb={28}
                sx={{
                    backgroundImage: ({
                        functions: { linearGradient, rgba },
                        palette: { gradients },
                    }) =>
                        image &&
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ textAlign: "center" }}
                >
                    <Grid item xs={10} lg={4}>
                        <SuiBox mt={6} mb={1}>
                            <SuiTypography
                                variant="h1"
                                color="white"
                                fontWeight="bold"
                            >
                                {title}
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={2}>
                            <SuiTypography
                                variant="body2"
                                color="white"
                                fontWeight="regular"
                            >
                                {description}
                            </SuiTypography>
                        </SuiBox>
                    </Grid>
                </Grid>
            </SuiBox>
            <SuiBox
                mt={{ xs: -26, lg: -24 }}
                px={1}
                width="calc(100% - 2rem)"
                mx="auto"
            >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={11} sm={6}>
                        {children}
                    </Grid>
                </Grid>
            </SuiBox>
        </PageLayout>
    );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
    title: "",
    description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default BasicLayout;
