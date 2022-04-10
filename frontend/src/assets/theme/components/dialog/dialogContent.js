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
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Soft UI home PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

export default {
    styleOverrides: {
        root: {
            padding: pxToRem(16),
            fontSize: size.md,
            color: text.main,
        },

        dividers: {
            borderTop: `${borderWidth[1]} solid ${borderColor}`,
            borderBottom: `${borderWidth[1]} solid ${borderColor}`,
        },
    },
};
