import { Button, MenuItem } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

const menuItemList = [
    {
        link: '/',
        linkText: 'Current Location',
    },
    {
        link: '/favourites',
        linkText: 'Favourites',
    },
    {
        link: '/forecasts',
        linkText: '5 Day Forecast',
    }
]

export const renderNavItems = (handleClose: (event: React.EventHandler<any>) => void) => {
    return menuItemList.map((menuItemObj) => (
        <MenuItem
            onClick={(event: any) => handleClose(event)}
            key={menuItemObj.link}
        >
            <Link
                to={menuItemObj.link}
            >
                <Button
                    color='inherit'
                >
                    {menuItemObj.linkText}
                </Button>
            </Link>
        </MenuItem>
    ))
};