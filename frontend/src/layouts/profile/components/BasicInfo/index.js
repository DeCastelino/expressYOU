import { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Soft UI home React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";

const BasicInfo = () => {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [confirmEmailError, setConfirmEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [counter, setCounter] = useState(0); // used to render the error message for confirmation email

    useEffect(() => {
        const user = localStorage.getItem("user");
        console.log("user: ", JSON.parse(user));
        if (user) {
            const userInfo = JSON.parse(user);
            setFirstName(userInfo.firstName);
            setSurname(userInfo.surname);
            setEmail(userInfo.email);
            setPhoneNumber(userInfo.phoneNumber);
            setUsername(userInfo.username);
            setGender(userInfo.gender);
            setBirthDate(userInfo.birthDate);
        } else window.location = "/authentication/sign-in";
    }, []);

    // checking if email is updated then confirmation email matches too
    useEffect(() => {
        if (counter < 2) {
            setCounter(counter + 1);
            console.log(counter);
        } else if (email !== confirmEmail) {
            console.log("email and confirm email do not match");
            setConfirmEmailError(true);
        } else setConfirmEmailError(false);
    }, [email, confirmEmail]);

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        // checking of no field is left blank
        if (
            !(
                firstName === "" ||
                surname === "" ||
                username === "" ||
                email === "" ||
                phoneNumber === "" ||
                confirmEmailError === true
            )
        ) {
            const userDetails = {
                firstName,
                surname,
                email,
                username,
                gender,
                birthDate,
            };
            axios
                .post("http://localhost:8000/user/changeName", userDetails)
                .then((res) => {
                    window.location.reload();
                });
        }
    };

    return (
        <Card sx={{ padding: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SuiTypography variant="h5" fontWeight="bold">
                        Basic Info
                    </SuiTypography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <SuiTypography variant="caption" fontWeight="bold">
                        First Name
                    </SuiTypography>
                    <SuiInput
                        placeholder={firstName}
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
                        placeholder={surname}
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
                        placeholder={username}
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
                        placeholder={phoneNumber}
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
                        label="Gender"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <SuiTypography variant="caption" fontWeight="bold">
                        Birth Date
                    </SuiTypography>
                    <SuiInput
                        type="date"
                        placeholder={birthDate}
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <SuiTypography variant="caption" fontWeight="bold">
                        Email
                    </SuiTypography>
                    <SuiInput
                        placeholder={email}
                        value={email}
                        error={emailError}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            console.log(email);
                        }}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <SuiTypography variant="caption" fontWeight="bold">
                        Confirm Email
                    </SuiTypography>
                    <SuiInput
                        placeholder=""
                        value={confirmEmail}
                        error={confirmEmailError}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                </Grid>

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
                        onClick={handleUpdateProfile}
                        width={50}
                    >
                        Update Info
                    </SuiButton>
                </SuiBox>
            </Grid>
        </Card>
    );
};

export default BasicInfo;
