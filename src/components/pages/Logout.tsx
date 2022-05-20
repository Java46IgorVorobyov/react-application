import React from "react";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {authAction} from "../../redux/actions";
import {emptyClientData} from "../../models/ClientData";

const Logout: React.FC = () => {
    const dispatch = useDispatch();

    return <Button onClick={() => dispatch(authAction(emptyClientData))}>Logout</Button>
}
export default Logout;