import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {ClientData} from "../../models/ClientData";
import {authAction} from "../../redux/actions";
import AuthServiceClient from "../../service/AuthServiceClient";
import LoginForm from "../forms/LoginForm";
import LoginData from "../../models/LoginData";
import {Alert} from "@mui/material";

const authService = new AuthServiceClient();

const Login: React.FC = () => {
    const dispatch = useDispatch();


    return <LoginForm submitFn={function (loginData: LoginData): void {
        const clientData = authService.login(loginData);
        if (!!clientData) {
            dispatch(authAction(clientData as ClientData));
        }
    }}/>
}
export default Login;