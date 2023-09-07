import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CurrentLocation from './pages/CurrentLocation';
import Favourites from './pages/Favourites';
import Forecasts from './pages/Forecasts';
import { Box } from '@mui/material';

const App = () => {

  return (
    <>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' element={<CurrentLocation />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/forecasts' element={<Forecasts />} />
        </Routes>
      </Box>
    </>
  )
}

export default App;
