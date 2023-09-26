import { CircularProgress } from '@mui/material';
import Forecast from '../Forecast/Forecast';
import { useForecasts } from './hooks/forecastsHook';

const Forecasts = () => {

  const weather = useForecasts();

  return (
    <>
      {weather ? weather.DailyForecasts.map(forecast => (
        <Forecast key={forecast.Date} forecast={forecast} />
      )) : <CircularProgress
        color="inherit"
        size={40}
        style={{
          transform: 'translateY(-50%)',
          position: 'absolute',
          top: '40%'
        }}
      />}

    </>
  )
}

export default Forecasts;
