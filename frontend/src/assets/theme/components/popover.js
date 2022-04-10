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

// Soft UI home PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// Soft UI home PRO React base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
    styleOverrides: {
        paper: {
            backgroundColor: transparent.main,
            boxShadow: lg,
            padding: pxToRem(8),
            borderRadius: borderRadius.lg,
        },
    },
};
