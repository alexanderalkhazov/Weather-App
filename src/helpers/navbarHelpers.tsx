import { Button, MenuItem } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

const menuItemList = [
    {
        link: '/',
        linkText: 'Favourites',
    },
    {
        link: '/forecasts',
        linkText: 'Weather',
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