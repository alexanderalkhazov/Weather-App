import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import SearchLocation from './pages/SearchLocation';
import Favourites from './pages/Favourites';
import ForecastsPage from './pages/ForecastsPage';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './themes/themes';
import { selectCurrentTheme } from './features/themeSlice';
import { useSelector } from 'react-redux';
import './App.css';
import UnitsSwitch from './components/UnitsSwitch/UnitsSwitch';
import { ThemeEnum } from './common/Enums';

const App = () => {
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <Box>
      <ThemeProvider theme={currentTheme === ThemeEnum.Light ? lightTheme : darkTheme}>
        <CssBaseline />
        <Navbar />
        Units Switch:
        <UnitsSwitch />
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
