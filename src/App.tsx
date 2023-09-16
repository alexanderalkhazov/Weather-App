import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import SearchLocation from './components/SearchLocation/SearchLocation';
import Favourites from './pages/Favourites';
import ForecastsPage from './pages/ForecastsPage';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './common/themes/themes';
import { selectCurrentTheme } from './state/state slices/themeSlice';
import { ThemeEnum } from './common/types/enums';
import { toggleUnits } from './state/state slices/unitsSlice';
import { useAppSelector } from './state/store/store';
import Switcher from './components/Switcher/Switcher';
import './App.css';

const App = () => {
  
  const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <Box>
      <ThemeProvider theme={currentTheme === ThemeEnum.Light ? lightTheme : darkTheme}>
        <CssBaseline />  
        <Navbar />
        <SearchLocation />
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <p>Switch Units:</p>
          <Switcher switchFunction={toggleUnits} />
        </Box>
        <Routes>
          <Route path='/' element={<Favourites />} />
          <Route path='/forecasts' element={<ForecastsPage />} />
        </Routes>
      </ThemeProvider>
    </Box>
  )
};

export default App;
