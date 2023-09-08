import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloudIcon from '@mui/icons-material/Cloud';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Navbar = () => {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const open = Boolean(anchor);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
    }

    const handleClose = () => {
        setAnchor(null);
    }

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

    return (
        <AppBar
            position='static'
        >
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                >
                    <CloudIcon />
                </IconButton>
                <Typography
                    variant='h6'
                    component='div'
                    sx={{
                        flexGrow: 1
                    }}
                >
                    Weather App
                </Typography>
                <Stack
                    direction={'row'}
                    spacing={2}
                >
                    <Button
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}          
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Options
                    </Button>
                    <ThemeSwitch />
                </Stack>
                <Menu
                    id='resources-menu'
                    anchorEl={anchor}
                    open={open}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button',
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    {menuItemList.map((menuItemObj) => (
                        <MenuItem
                            onClick={handleClose}
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
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

