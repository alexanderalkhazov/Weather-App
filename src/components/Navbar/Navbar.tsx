import { IconButton } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import Switcher from '../Switcher/Switcher';
import { toggleTheme } from '../../state/state slices/themeSlice';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import './Navbar.css';

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
                        <CloudIcon sx={{color: '#2955b3'}} />
                    </IconButton>
                    <p>Weather App</p>
                </div>
                <CurrentLocation />
                <Switcher
                    switchFunction={toggleTheme}
                />
            </nav>

        </>
    )
}

export default Navbar;

