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
                borderRadius="lg"
                height={"50vh"}
                m={1}
                pt={7}
                sx={{
                    backgroundImage: `url(${image})`,
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
                    <Grid item xs={12}>
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
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: {
                        xs: "translate(-50%, -20%)",
                        sm: "translate(-50%, -30%)",
                    },
                    width: "90%",
                    maxWidth: "1500px",
                    paddingX: 2,
                }}
            >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={12} sm={10} md={8} lg={8}>
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
