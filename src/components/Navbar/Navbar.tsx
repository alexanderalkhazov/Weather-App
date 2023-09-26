import { IconButton } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import Switcher from '../Switcher/Switcher';
import { selectCurrentTheme, toggleTheme } from '../../state/state slices/themeSlice';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import './Navbar.css';
import { useAppSelector } from '../../state/store/store';
import { ThemeEnum } from '../../common/types/enums';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
    
    const currentTheme = useAppSelector(selectCurrentTheme);
    
    return (
        <>
            <nav>
                <div className='weather-logo-container'>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                    >
                        <CloudIcon sx={{ color: '#2955b3' }} />
                    </IconButton>
                    <p>Weather App</p>
                </div>
                <CurrentLocation />
                <div className='dark-mode-switch-container'>
                    <Switcher
                        switchFunction={toggleTheme}
                        />
                        {currentTheme === ThemeEnum.Light ? <LightModeIcon /> : <DarkModeIcon />}
                </div>
            </nav>

        </>
    )
}

export default Navbar;

