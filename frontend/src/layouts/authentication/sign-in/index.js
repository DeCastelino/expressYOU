import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Soft UI home React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import { Context } from "../../../UserContext";

import { FormHelperText } from "@mui/material";

// Images
import curved9 from "assets/images/curved-images/curved14.jpg";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const { setUser } = useContext(Context);

    // handle errorMessage
    const handleErrorMessage = () => {
        setLoginError(true);
    };

    // function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };
        axios
            .post("http://localhost:8000/login", user)
            .then((res) => {
                setUser(res.data);
                window.location.href = "/";
            })
            .catch((err) => {
                handleErrorMessage();
            });
    };

    return (
        <CoverLayout
            title="Welcome back"
            description="Enter your user ID and password to sign in"
            image={curved9}
        >
            <SuiBox component="form" role="form">
                <SuiBox mb={2}>
                    <SuiBox mb={1} ml={0.5}>
                        <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                        >
                            Username
                        </SuiTypography>
                    </SuiBox>
                    <SuiInput
                        type="username"
                        placeholder="Username"
                        value={username}
                        error={loginError}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {loginError && (
                        <FormHelperText error>
                            Username is incorrect
                        </FormHelperText>
                    )}
                </SuiBox>
                <SuiBox mb={1}>
                    <SuiBox mb={1} ml={0.5}>
                        <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                        >
                            Password
                        </SuiTypography>
                    </SuiBox>
                    <SuiInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        error={loginError}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {loginError && (
                        <FormHelperText error>
                            Password is incorrect
                        </FormHelperText>
                    )}
                </SuiBox>
                <SuiBox mt={4} mb={1}>
                    <SuiButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        sign in
                    </SuiButton>
                </SuiBox>
                <SuiBox mt={3} textAlign="center">
                    <SuiTypography
                        variant="button"
                        color="text"
                        fontWeight="regular"
                    >
                        Don't have an account?{" "}
                        <SuiTypography
                            component={Link}
                            to="/authentication/sign-up"
                            variant="button"
                            color="info"
                            fontWeight="medium"
                            textGradient
                        >
                            Sign up
                        </SuiTypography>
                    </SuiTypography>
                </SuiBox>
            </SuiBox>
        </CoverLayout>
    );
}

export default SignIn;
