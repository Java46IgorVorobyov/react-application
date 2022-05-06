import React from 'react';
import {RouteType} from "../../models/RouteType";
import {Link, useLocation} from "react-router-dom";
import {AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const NavigatorMobile: React.FC<{ items: RouteType[] }> = ({items}) => {
    const location = useLocation();
    let activeItem = items.find(item => location.pathname === item.path);

    const [open, setState] = React.useState(false);
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab'
            || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setState(open);
    };

    function getListItems(): React.ReactNode[] {
        return items.map((item) => (
            <ListItem key={item.label} component={Link} to={item.path} onClick={toggleDrawer(false)}>
                <ListItemIcon>
                    <ArrowRightIcon/>
                </ListItemIcon>
                <ListItemText disableTypography sx={{fontSize: '1rem'}} primary={item.label}/>
            </ListItem>
        ))
    }

    return <Box sx={{display: 'flex'}}>
        <CssBaseline/>
        <AppBar position={'absolute'}>
            <Toolbar>
                <IconButton color='inherit' aria-label='open drawer' onClick={toggleDrawer(true)} edge='start'
                            sx={{mr: 2, ...(open && {display: 'none'})}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component='div'>
                    {activeItem ? activeItem.label : items[0].label}
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
                anchor='left'
                open={open}
                onClose={toggleDrawer(false)}
        >
            <List>
                {getListItems()}
            </List>
        </Drawer>
    </Box>

};

export default NavigatorMobile;