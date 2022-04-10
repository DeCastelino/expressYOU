import { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI home React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";

const ChangePassword = ({ username }) => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [currentPasswordError, setCurrentPasswordError] = useState(false);

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (
            !(
                password === "" ||
                newPassword === "" ||
                confirmNewPassword === ""
            ) &&
            newPassword === confirmNewPassword
        ) {
            const passwords = {
                username,
                password,
                newPassword,
            };
            axios
                .post("http://localhost:8000/user/changePassword", passwords)
                .then((res) => {
                    window.location = "/profile";
                })
                .catch((error) => {
                    setCurrentPasswordError(true);
                });
        }
    };

    return (
        <Card sx={{ padding: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SuiTypography variant="h5" fontWeight="bold">
                        Change Password
                    </SuiTypography>
                </Grid>
                <Grid item xs={12}>
                    <SuiTypography variant="caption" fontWeight="bold">
                        Current Password
                    </SuiTypography>
                    <SuiInput
                        type="password"
                        placeholder="********"
                        value={password}
                        error={currentPasswordError}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SuiTypography variant="caption" fontWeight="bold">
                        New Password
                    </SuiTypography>
                    <SuiInput
                        type="password"
                        placeholder="********"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SuiTypography variant="caption" fontWeight="bold">
                        Confirm New Password
                    </SuiTypography>
                    <SuiInput
                        type="password"
                        placeholder="********"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </Grid>
                <SuiBox
                    pt={5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <SuiTypography variant="h6" fontWeight="bold">
                        Password Requirements
                    </SuiTypography>
                    <SuiTypography
                        variant="subtitle2"
                        fontWeight="regular"
                        opacity="0.6"
                        pt={1}
                        pb={0.5}
                    >
                        Please follow this guide for a strong password
                    </SuiTypography>
                    <SuiTypography
                        variant="subtitle2"
                        fontWeight="regular"
                        opacity="0.6"
                        pl={2}
                    >
                        <ul>
                            <li> One special character</li>
                            <li>Min 8 characters</li>
                            <li>One number (2 are recommended)</li>
                            <li>Change it often</li>
                        </ul>
                    </SuiTypography>
                    <SuiBox
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            width: "100%",
                            paddingTop: 5,
                        }}
                    >
                        <SuiButton
                            variant="gradient"
                            color="dark"
                            onClick={handleChangePassword}
                            width={50}
                        >
                            Update Password
                        </SuiButton>
                    </SuiBox>
                </SuiBox>
            </Grid>
        </Card>
    );
};

export default ChangePassword;
