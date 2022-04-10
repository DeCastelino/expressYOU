/**
=========================================================
* Soft UI home React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-home-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI home PRO React base styles
import colors from "assets/theme/base/colors";

// Soft UI home PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent } = colors;

export default {
    styleOverrides: {
        root: {
            margin: `${pxToRem(48)} 0`,
            padding: `0 ${pxToRem(12)}`,

            "&.MuiPaper-root": {
                backgroundColor: transparent.main,
            },
        },
    },
};