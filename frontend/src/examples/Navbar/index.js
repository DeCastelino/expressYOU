import { useState, useEffect, useContext } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

// Soft UI home PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiAvatar from "components/SuiAvatar";
import { Context } from "../../UserContext";

// Soft UI home PRO React example components
import DefaultNavbarLink from "./NavbarLink";

// Custom styles for homeNavbar
import {
    navbar,
    navbarContainer,
    navbarRow,
    navbarIconButton,
} from "examples/Navbar/styles";

// Soft UI home PRO React context
import {
    useSoftUIController,
    setTransparentNavbar,
    setMiniSidenav,
    setOpenConfigurator,
} from "context";

// Images

function HomeNavbar({ absolute, light, isMini }) {
    const [navbarType, setNavbarType] = useState();
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } =
        controller;
    const [openMenu, setOpenMenu] = useState(false);
    const [profilePicture, setProfilePicture] = useState("");
    const { user } = useContext(Context);
    const profileImage = `http://localhost:8000/images/${user.profilePicture}`;

    useEffect(() => {
        // Retrieving profile picture
        if (user) {
            setProfilePicture(user.profilePicture);
        }

        // Setting the navbar type
        if (fixedNavbar) {
            setNavbarType("sticky");
        } else {
            setNavbarType("static");
        }

        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {
            setTransparentNavbar(
                dispatch,
                (fixedNavbar && window.scrollY === 0) || !fixedNavbar
            );
        }
        /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
        window.addEventListener("scroll", handleTransparentNavbar);

        // Call the handleTransparentNavbar function to set the state with the initial value.
        handleTransparentNavbar();

        // Remove event listener on cleanup
        return () =>
            window.removeEventListener("scroll", handleTransparentNavbar);
    }, [dispatch, fixedNavbar]);

    const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
    const handleConfiguratorOpen = () =>
        setOpenConfigurator(dispatch, !openConfigurator);
    const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
    const handleCloseMenu = () => setOpenMenu(false);

    // On Logging out, redirect to login page
    const handleLogout = () => {
        localStorage.clear();
        window.location = "/authentication/sign-in";
    };

    return (
        <AppBar
            position={absolute ? "absolute" : navbarType}
            color="inherit"
            sx={(theme) =>
                navbar(theme, { transparentNavbar, absolute, light })
            }
        >
            <Toolbar sx={(theme) => navbarContainer(theme)}>
                <SuiBox
                    color="inherit"
                    mb={{ xs: 1, md: 0 }}
                    sx={(theme) => navbarRow(theme, { isMini })}
                >
                    <DefaultNavbarLink
                        icon="donut_large"
                        name="home"
                        route="/home"
                        light={light}
                    />
                </SuiBox>
                <SuiBox
                    color="inherit"
                    display={{ xs: "none", lg: "flex" }}
                    m={0}
                    p={0}
                ></SuiBox>
                {isMini ? null : (
                    <SuiBox sx={(theme) => navbarRow(theme, { isMini })}>
                        <SuiBox color={light ? "black" : "inherit"}>
                            <Link to="/profile">
                                <IconButton sx={navbarIconButton} size="small">
                                    <SuiAvatar
                                        src={profileImage}
                                        alt="Avatar"
                                        size="sm"
                                    />
                                </IconButton>
                            </Link>{" "}
                            <SuiButton
                                component="a"
                                href="/authentication/sign-in"
                                target="_blank"
                                rel="noreferrer"
                                variant="gradient"
                                color="dark"
                                size="small"
                                circular
                                onClick={handleLogout}
                            >
                                logout
                            </SuiButton>{" "}
                        </SuiBox>
                    </SuiBox>
                )}
            </Toolbar>
        </AppBar>
    );
}

// Setting default values for the props of homeNavbar
HomeNavbar.defaultProps = {
    absolute: false,
    light: false,
    isMini: false,
};

// Typechecking props for the homeNavbar
HomeNavbar.propTypes = {
    absolute: PropTypes.bool,
    light: PropTypes.bool,
    isMini: PropTypes.bool,
};

export default HomeNavbar;
