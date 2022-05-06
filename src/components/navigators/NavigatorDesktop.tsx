import React from 'react';
import {RouteType} from "../../models/RouteType";
import {AppBar, Tab, Tabs} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

const NavigatorDesktop: React.FC<{ items: RouteType[] }> = ({items}) => {
    const [tabNumber, setTabNumber] = React.useState<number>(0);

    function changeTab(event: any, tabNumber: number) {
        setTabNumber(tabNumber);
    }

    function getTabs(): React.ReactNode {
        return items.map(item => <Tab style={{color: 'white'}} key={item.path} component={RouterLink} to={item.path}
                                      label={item.label}/>)
    }

    return (
        <AppBar position={'fixed'}>
            <Tabs indicatorColor={'secondary'} value={tabNumber} onChange={changeTab}>
            {getTabs()}
        </Tabs>
        </AppBar>
    );
};

export default NavigatorDesktop;