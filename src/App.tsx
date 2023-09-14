import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import SearchLocation from './pages/SearchLocation';
import Favourites from './pages/Favourites';
import ForecastsPage from './pages/ForecastsPage';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './common/themes/themes';
import { selectCurrentTheme } from './state/state slices/themeSlice';
import { useSelector } from 'react-redux';
import { ThemeEnum } from './common/types/enums';
import Switcher from './components/Switch/Switch';
import { toggleUnits } from './state/state slices/unitsSlice';
import './App.css';

const App = () => {
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <Box>
      <ThemeProvider theme={currentTheme === ThemeEnum.Light ? lightTheme : darkTheme}>
        <CssBaseline />
        <Navbar />
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          Switch Units:
          <Switcher switchFunction={toggleUnits} />
        </Box>
        <Routes>
          <Route path='/' element={<SearchLocation />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/forecasts' element={<ForecastsPage />} />
        </Routes>
      </ThemeProvider>
    </Box>
  )
};

export default App;
