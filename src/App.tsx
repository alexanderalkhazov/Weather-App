import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CurrentLocation from './pages/CurrentLocation';
import Favourites from './pages/Favourites';
import ForecastsPage from './pages/ForecastsPage';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './themes/themes';
import { selectCurrentTheme } from './features/themeSlice';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const isLight = 'light';

  return (
    <Box>
      <ThemeProvider theme={currentTheme === isLight ? lightTheme : darkTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path='/' element={<CurrentLocation />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/forecasts' element={<ForecastsPage />} />
        </Routes>
      </ThemeProvider>
    </Box>
  )
};

export default App;
