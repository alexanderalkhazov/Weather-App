import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import SearchLocation from './components/SearchLocation/SearchLocation';
import ForecastsPage from './pages/ForecastsPage';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
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
    <ThemeProvider theme={currentTheme === ThemeEnum.Light ? lightTheme : darkTheme}>
      <CssBaseline />
      <Navbar />
      <SearchLocation />
      <div className='units-toggler-container'>
        <span>Toggle Units</span>
        <Switcher switchFunction={toggleUnits} />
      </div>
      <Routes>
        <Route path='/' element={<ForecastsPage />} />
      </Routes>
    </ThemeProvider>
  )
};

export default App;
