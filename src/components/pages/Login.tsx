import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {ClientData} from "../../models/ClientData";
import LoginData from "../../models/LoginData";
import {authAction, setOperationCode} from "../../redux/actions";
import LoginForm from "../forms/LoginForm";
import {useNavigate} from "react-router-dom";
import {COURSES_PATH} from "../../config/routes-config";
import {authService} from "../../config/service-config";
import {OperationCode} from "../../models/OperationCode";
import {Alert, Box, Collapse, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = React.useState(false);

    return (<Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Collapse sx={{mt: {sm: -7, md: 0}, width: '90%'}} in={error}>
            <Alert severity="error"
                   action={
                       <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => {
                               setError(false);
                           }}
                       >
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }
                   sx={{mb: 1}}
            >
                Incorrect email or/and password
            </Alert>
        </Collapse>
        <LoginForm submitFn={async function (loginData: LoginData): Promise<boolean> {
            const clientData = await authService.login(loginData);
            if (!!clientData) {
                dispatch(authAction(clientData as ClientData));
                dispatch(setOperationCode(OperationCode.OK));
                navigate(COURSES_PATH);
                return true;
            } else {
                setError(true)
            }
            return false;
        }} closeAlert={() => setError(false)}/>
    </Box>)
}


export default Login;