import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI home PRO React components
import SuiBox from "components/SuiBox";

// Soft UI home PRO React context
import { useSoftUIController, setLayout } from "context";

function HomeLayout({ children }) {
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav } = controller;
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, "home");
    }, [pathname]);

    return (
        <SuiBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                p: 3,
                position: "relative",
                overflow: "hidden",

                [breakpoints.up("xl")]: {
                    marginLeft: pxToRem(25),
                    marginRight: pxToRem(25),
                    transition: transitions.create(
                        ["margin-left", "margin-right"],
                        {
                            easing: transitions.easing.easeInOut,
                            duration: transitions.duration.standard,
                        }
                    ),
                },
            })}
        >
            {children}
        </SuiBox>
    );
}

// Typechecking props for the homeLayout
HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeLayout;
