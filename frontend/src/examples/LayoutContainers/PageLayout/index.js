import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI home PRO React components
import SuiBox from "components/SuiBox";

// Soft UI home PRO React context
import { useSoftUIController, setLayout } from "context";

function PageLayout({ background, children }) {
    const [, dispatch] = useSoftUIController();
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, "page");
    }, [pathname]);

    return (
        <SuiBox bgColor={background} sx={{ overflow: "hidden" }}>
            {children}
        </SuiBox>
    );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
    background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
    background: PropTypes.oneOf(["white", "light", "default"]),
    children: PropTypes.node.isRequired,
};

export default PageLayout;
