import { IconButton } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import Switcher from '../Switcher/Switcher';
import { selectTheme, toggleTheme } from '../../state/state slices/themeSlice';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import { useAppSelector } from '../../state/store/store';
import { ThemeEnum } from '../../common/types/enums';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './Navbar.css';

const Navbar = () => {

    const { theme } = useAppSelector(selectTheme);

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
                    {theme === ThemeEnum.Light ? <LightModeIcon /> : <DarkModeIcon />}
                </div>
            </nav>

        </>
    )
}

export default Navbar;

