import { useState, useEffect } from "react";
import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Soft UI home React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import curved6 from "assets/images/curved-images/curved-6.jpg";

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

    // Redirect to home if user is logged in.
    useEffect(() => {
        const foundUser = localStorage.getItem("user");
        if (foundUser) window.location = "/home";
    }, []);

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
                    // console.log(error.response["data"].error);
                    // if (
                    //     error.response["data"].error.toLowerCase() === "email"
                    // ) {
                    //     setEmailError(true);
                    //     setUsernameError(false);
                    // }
                    // if (
                    //     error.response["data"].error.toLowerCase() ===
                    //     "username"
                    // ) {
                    //     setEmailError(false);
                    //     setUsernameError(true);
                    // }
                });
        }
    };

    return (
        <BasicLayout
            title="Welcome!"
            description="You are one sign up away from being awesome... "
            image={curved6}
        >
            <Card sx={{ paddingBottom: 3, paddingX: 3 }}>
                <SuiBox py={3} textAlign="center">
                    <SuiTypography variant="h4" fontWeight="medium">
                        Register
                    </SuiTypography>
                </SuiBox>
                <SuiBox
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Grid item xs={6}>
                        <SuiBox mb={0.5} ml={0.5}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                First Name
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={1} pr={1.5}>
                            <SuiInput
                                placeholder="eg. Tom"
                                value={firstName}
                                error={firstNameError}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </SuiBox>
                    </Grid>
                    <Grid item xs={6}>
                        <SuiBox mb={0.5} ml={1.5}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                Surname
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={1} pl={1.5}>
                            <SuiInput
                                placeholder="eg. Brady"
                                value={surname}
                                error={surnameError}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </SuiBox>
                    </Grid>
                </SuiBox>
                <SuiBox
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Grid item xs={4}>
                        <SuiBox mb={0.5} ml={0.5} mt={0}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                Username
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={1} pr={1.5}>
                            <SuiInput
                                placeholder="eg. TomBrady"
                                value={username}
                                error={usernameError}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </SuiBox>
                    </Grid>
                    <Grid item xs={4} pr={1}>
                        <SuiBox mb={0.5} mx={2}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                Phone Number
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={1} px={1.5}>
                            <SuiInput
                                type="tel"
                                placeholder="eg. +254712345678"
                                value={phoneNumber}
                                error={phoneNumberError}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </SuiBox>
                    </Grid>
                    <Grid item xs={2}>
                        <SuiBox mb={0.5} mx={2}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                I'm
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={1} pr={1.5}>
                            <Select
                                value={gender}
                                placeholder="Male"
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </SuiBox>
                    </Grid>
                    <Grid item xs={3.5} pl={1.5}>
                        <SuiBox mb={0.5} ml={0.5}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                Birthday Month
                            </SuiTypography>
                        </SuiBox>
                        <SuiInput
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </Grid>
                </SuiBox>
                <SuiBox
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Grid item xs={6}>
                        <SuiBox mb={0.5} ml={0.5}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                Email
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={1} pr={1.5}>
                            <SuiInput
                                placeholder="eg. tombrady@example.com"
                                value={email}
                                error={emailError}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </SuiBox>
                    </Grid>
                    <Grid item xs={6}>
                        <SuiBox mb={0.5} ml={2}>
                            <SuiTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                            >
                                Password
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={1} pl={1.5}>
                            <SuiInput
                                type="password"
                                placeholder="************"
                                value={password}
                                error={passwordError}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </SuiBox>
                    </Grid>
                </SuiBox>
                <SuiBox mt={4} mb={1}>
                    <SuiButton
                        variant="gradient"
                        color="dark"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        sign up
                    </SuiButton>
                </SuiBox>
                <SuiBox mt={3} textAlign="center">
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
            </Card>
        </BasicLayout>
    );
}

export default SignUp;
