import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI home PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI home PRO React example components
import HomeNavbar from "examples/Navbar";

// Soft UI home PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import curved0 from "assets/images/curved-images/curved0.jpg";

function Header() {
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            return window.innerWidth < breakpoints.values.sm
                ? setTabsOrientation("vertical")
                : setTabsOrientation("horizontal");
        }

        /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
        window.addEventListener("resize", handleTabsOrientation);

        // Call the handleTabsOrientation function to set the state with the initial value.
        handleTabsOrientation();

        // Remove event listener on cleanup
        return () =>
            window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

    return (
        <SuiBox position="relative">
            <HomeNavbar absolute light />
            <SuiBox
                display="flex"
                alignItems="center"
                position="relative"
                minHeight="18.75rem"
                borderRadius="xl"
                sx={{
                    backgroundImage: ({
                        functions: { rgba, linearGradient },
                        palette: { gradients },
                    }) =>
                        `${linearGradient(
                            rgba(gradients.info.main, 0.6),
                            rgba(gradients.info.state, 0.6)
                        )}, url(${curved0})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    overflow: "hidden",
                }}
            />
            <Card
                sx={{
                    backdropFilter: `saturate(200%) blur(30px)`,
                    WebkitBackdropFilter: `saturate(200%) blur(30px)`,
                    backgroundColor: ({
                        functions: { rgba },
                        palette: { white },
                    }) => rgba(white.main, 0.9),
                    boxShadow: ({ boxShadows: { navbarBoxShadow } }) =>
                        navbarBoxShadow,
                    position: "relative",
                    mt: -8,
                    mx: 3,
                    py: 2,
                    px: 2,
                }}
            >
                <Grid container margin={2} justifyContent="center">
                    <Grid item alignItems="center">
                        <SuiTypography variant="h3" fontWeight="bold">
                            Profile Settings
                        </SuiTypography>
                    </Grid>
                </Grid>
            </Card>
        </SuiBox>
    );
}

export default Header;
