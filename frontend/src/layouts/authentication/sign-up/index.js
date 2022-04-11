// React Components
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// @mui material components
import { Card, Grid, Select, MenuItem } from "@mui/material";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Soft UI home React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Images
import cover from "assets/images/curved-images/cover.jpg";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    // function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === "") setFirstNameError(true);
        if (surname === "") setSurnameError(true);
        if (username === "") setUsernameError(true);
        if (email === "") setEmailError(true);
        if (password === "") setPasswordError(true);
        if (phoneNumber === "") setPhoneNumberError(true);

        const user = {
            firstName,
            surname,
            email,
            phoneNumber,
            username,
            password,
            gender,
            birthDate,
        };
        if (
            !(
                firstName === "" ||
                surname === "" ||
                username === "" ||
                email === "" ||
                password === "" ||
                phoneNumber === ""
            ) &&
            password.length >= 8
        ) {
            axios
                .post("http://localhost:8000/register", user)
                .then((res) => {
                    console.log("User registered successfully");
                    window.location = "/authentication/sign-in";
                })
                .catch((error) => {
                    console.log(error);
                    setEmailError(true);
                    setUsernameError(true);
                });
        }
    };

    return (
        <BasicLayout
            title="Welcome!"
            description="You are one sign up away from being awesome..."
            image={cover}
        >
            <Card sx={{ padding: 3, display: "flex" }}>
                <Grid container spacing={2}>
                    <Grid item textAlign="center" xs={12}>
                        <SuiTypography variant="h4" fontWeight="medium">
                            Register
                        </SuiTypography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <SuiTypography variant="caption" fontWeight="bold">
                            First Name
                        </SuiTypography>
                        <SuiInput
                            placeholder="eg. Tom"
                            value={firstName}
                            error={firstNameError}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <SuiTypography variant="caption" fontWeight="bold">
                            Surname
                        </SuiTypography>
                        <SuiInput
                            placeholder="eg. Brady"
                            value={surname}
                            error={surnameError}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <SuiTypography variant="caption" fontWeight="bold">
                            Username
                        </SuiTypography>
                        <SuiInput
                            placeholder="eg. TomBrady"
                            value={username}
                            error={usernameError}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <SuiTypography variant="caption" fontWeight="bold">
                            Phone Number
                        </SuiTypography>

                        <SuiInput
                            type="tel"
                            placeholder="eg. +254712345678"
                            value={phoneNumber}
                            error={phoneNumberError}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} xs={12}>
                        <SuiTypography variant="caption" fontWeight="bold">
                            I'm
                        </SuiTypography>
                        <Select
                            value={gender}
                            placeholder="Male"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <SuiTypography variant="caption" fontWeight="bold">
                            Birthday Date
                        </SuiTypography>
                        <SuiInput
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                        >
                            Email
                        </SuiTypography>
                        <SuiInput
                            placeholder="eg. tombrady@example.com"
                            value={email}
                            error={emailError}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                        >
                            Password
                        </SuiTypography>
                        <SuiInput
                            type="password"
                            placeholder="************"
                            value={password}
                            error={passwordError}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <SuiBox
                        mt={5}
                        mb={1}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <SuiButton
                            variant="gradient"
                            color="dark"
                            fullWidth
                            onClick={handleSubmit}
                        >
                            sign up
                        </SuiButton>

                        <SuiBox mt={3}>
                            <SuiTypography
                                variant="button"
                                color="text"
                                fontWeight="regular"
                            >
                                Already have an account?&nbsp;
                                <SuiTypography
                                    component={Link}
                                    to="/authentication/sign-in"
                                    variant="button"
                                    color="dark"
                                    fontWeight="bold"
                                    textGradient
                                >
                                    Sign in
                                </SuiTypography>
                            </SuiTypography>
                        </SuiBox>
                    </SuiBox>
                </Grid>
            </Card>
        </BasicLayout>
    );
}

export default SignUp;
