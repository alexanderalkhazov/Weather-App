import { Button, IconButton, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import Switcher from '../Switcher/Switcher';
import { toggleTheme } from '../../state/state slices/themeSlice';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import './Navbar.css';
import { Link } from 'react-router-dom';



const menuItemList = [
    {
        link: '/forecasts',
        linkText: 'Weather',
    },
    {
        link: '/',
        linkText: 'Favourites',
    },
]



const Navbar = () => {
    return (
        <>
            <nav>
                <div className='weather-logo-container'>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                    >
                        <CloudIcon />
                    </IconButton>
                    <p>Weather App</p>
                </div>

                <CurrentLocation />

                <div>
                    < Link
                        to={'/forecasts'}
                    >
                        <Button>
                            {'Weather'}
                        </Button>
                    </Link >
                    < Link
                        to={'/'}
                    >
                        <Button>
                            {'Favourites'}
                        </Button>
                    </Link >
                </div>


                <Switcher
                    switchFunction={toggleTheme}
                />
            </nav>

        </>
    )
}

export default Navbar;

