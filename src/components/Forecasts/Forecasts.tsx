import Forecast from '../Forecast/Forecast';
import { useForecasts } from './hooks/forecastsHook';

const Forecasts = () => {

  const weather = useForecasts();

  return (
    <>
      {weather ? weather.DailyForecasts.map(forecast => (
        <Forecast key={forecast.Date} forecast={forecast} />
      )) : <p>Loading...</p>}
    </>
  )
}

export default Forecasts;
