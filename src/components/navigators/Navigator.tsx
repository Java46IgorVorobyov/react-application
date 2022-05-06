import React from "react";
import {RouteType} from "../../models/RouteType";
import {useMediaQuery} from "@mui/material";
import NavigatorDesktop from "./NavigatorDesktop";
import NavigatorMobile from "./NavigatorMobile";
import {ROUTES} from "../../config/routes-config";

const Navigator: React.FC<{ items: RouteType[] }> = ({items}) => {
    const isLaptopOrDesktop = useMediaQuery('(min-width: 900px)');
    return (
        <div style={{marginTop: '10vh'}}>
            {isLaptopOrDesktop ? <NavigatorDesktop items={ROUTES}/> : <NavigatorMobile items={ROUTES}/>}
        </div>
    );
};
export default Navigator;