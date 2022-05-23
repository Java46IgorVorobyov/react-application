import React, {useState} from 'react';
import LoginData from "../../models/LoginData";
import {Box, Button, Container, createTheme, CssBaseline, Link, TextField, ThemeProvider, Typography} from "@mui/material";
import loginData from "../../models/LoginData";

type Props = {
    submitFn: (loginData: LoginData) => void;
}

let inputElement: any;
let inputPassword: any;


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright ©'}
            <Link color="inherit" href="https://usnd.to/CptW">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const LoginForm: React.FC<Props> = ({submitFn}) => {

    function onLogin() {
        const loginEmail: string = inputElement.value;
        const loginPassword: string = inputPassword.value;
        const loginTokens: string[] = [loginEmail, loginPassword];
        submitFn({email: loginTokens[0], password: loginTokens[1]});
    }

    React.useEffect(() => {
        inputElement = document.getElementById("email");
        inputPassword = document.getElementById("password");
    })


    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Typography component="h1" variant="h5">Sign In</Typography>
                    <Box component="form" onSubmit={onLogin} sx={{mt: 1}}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Sign In</Button>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
};

export default LoginForm;