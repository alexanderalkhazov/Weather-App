import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloudIcon from '@mui/icons-material/Cloud';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const Navbar = () => {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const open = Boolean(anchor);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
    }

    const handleCLose = () => {
        setAnchor(null);
    }

    return (
        <AppBar position='static' sx={{
            backgroundColor: 'lightblue'
        }}>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
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
                <Stack direction={'row'} spacing={2}>
                    <Button
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup={true}
                        aria-expanded={open ? true : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Options
                    </Button>
                    <Button onClick={handleCLose}>Theme</Button>
                </Stack>
                <Menu id='resources-menu' anchorEl={anchor} open={open} MenuListProps={{
                    'aria-labelledby': 'resources-button',
                }}
                    onClose={handleCLose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleCLose}>
                        <Link to={'/'}>
                            <Button color='inherit'>Current Location</Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCLose}>
                        <Link to={'favourites'}>
                            <Button color='inherit'>Favourites</Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCLose}>
                        <Link to={'/forecasts'}>
                            <Button color='inherit'>5 Day Forecast</Button>
                        </Link>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

