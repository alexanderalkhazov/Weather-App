import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import CurrentLocation from './pages/CurrentLocation';
import Favourites from './pages/Favourites';
import Forecasts from './pages/Forecasts';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CurrentLocation />}/>
        <Route path='/favourites' element={<Favourites />}/>
        <Route path='/forecasts' element={<Forecasts />}/>
      </Routes>
    </>
  )
}

export default App;
