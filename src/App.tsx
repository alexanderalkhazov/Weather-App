import { useEffect, useState } from 'react';
import './App.css';
import { getCoords } from './services/getCoords';
import { getCityCodeByCoords, getForecastByCityCode } from './services/weatherRequests';

const App = () => {

  const [data,setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const coords = await getCoords();
      console.log(coords.coords);
      const cityCode = await getCityCodeByCoords(coords.coords.latitude,coords.coords.longitude);
      console.log(cityCode.Key);
      const forecast = await getForecastByCityCode(cityCode.Key);
      console.log(forecast);
      setData(forecast.DailyForecasts);
    })();
  },[]);

  return (
    <>
      <header>Weather App</header>
      <nav>
        
      </nav>
      <main>
        {data.map(forecast => (<p>{forecast.Temperature.Maximum.Value}</p>))}
      </main>

    </>
  )
}

export default App;
