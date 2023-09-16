import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Menu
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { renderNavItems } from '../../helpers/navbarHelpers';
import Switcher from '../Switcher/Switcher';
import { toggleTheme } from '../../state/state slices/themeSlice';
import CurrentLocation from '../CurrentLocation/CurrentLocation';

const Navbar = () => {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const open = Boolean(anchor);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
    }

    const handleClose = () => {
        setAnchor(null);
    }

    return (
        <AppBar
            position='static'
        >
            <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
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
                    <CurrentLocation />
                    <Button
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Options
                    </Button>
                    <Switcher switchFunction={toggleTheme} />
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
                        {renderNavItems(handleClose)}
                    </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

