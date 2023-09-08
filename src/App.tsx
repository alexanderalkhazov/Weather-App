import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CurrentLocation from './pages/CurrentLocation';
import Favourites from './pages/Favourites';
import Forecasts from './pages/Forecasts';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme/themes';
import { getCurrentTheme } from './features/themeSlice';

const App = () => {

  const currentTheme = getCurrentTheme();
 
  return (
    <Box>
      <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path='/' element={<CurrentLocation />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/forecasts' element={<Forecasts />} />
        </Routes>
      </ThemeProvider>
    </Box>
  )
}

export default App;
