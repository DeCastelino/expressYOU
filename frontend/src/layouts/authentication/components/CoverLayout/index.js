// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI home PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI home PRO React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

function CoverLayout({
    color,
    header,
    title,
    description,
    image,
    top,
    children,
}) {
    return (
        <PageLayout>
            <Grid container height="100vh">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <SuiBox>
                        <SuiBox pt={3} px={3}>
                            {!header ? (
                                <>
                                    <SuiBox mb={1}>
                                        <SuiTypography
                                            variant="h3"
                                            fontWeight="bold"
                                            color={color}
                                            textGradient
                                        >
                                            {title}
                                        </SuiTypography>
                                    </SuiBox>
                                    <SuiTypography
                                        variant="body2"
                                        fontWeight="regular"
                                        color="text"
                                    >
                                        {description}
                                    </SuiTypography>
                                </>
                            ) : (
                                header
                            )}
                        </SuiBox>
                        <SuiBox p={3}>{children}</SuiBox>
                    </SuiBox>
                </Grid>
                <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    display={{ xs: "none", sm: "none", md: "block" }}
                >
                    <SuiBox
                        height="75%"
                        position="relative"
                        right={{ md: "-12rem", xl: "-20rem" }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            transform: "skewX(-10deg)",
                            overflow: "hidden",
                            borderBottomLeftRadius: ({
                                borders: { borderRadius },
                            }) => borderRadius.lg,
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                        }}
                    ></SuiBox>
                </Grid>
            </Grid>
        </PageLayout>
    );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
    header: "",
    title: "",
    description: "",
    color: "info",
    top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
    ]),
    header: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    top: PropTypes.number,
    children: PropTypes.node.isRequired,
};

export default CoverLayout;
