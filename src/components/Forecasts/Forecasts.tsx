import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../state/store/store';
import { fetchForecastsThunk, fetchLocationByCoordsThunk, selectAllForecasts } from "../../state/state slices/weatherSlice";
import Forecast from '../Forecast/Forecast';
import { WeatherData } from '../../common/types/forecastTypes';
import { Location } from '../../common/types/locationKeyTypes';

const Forecasts = () => {
  const dispatch = useAppDispatch()
  const weather: WeatherData | null = useAppSelector(selectAllForecasts);

  const getAllForecasts = async () => {
    const payLoadCoords = await dispatch(fetchLocationByCoordsThunk());
    const location = payLoadCoords.payload as Location;
    dispatch(fetchForecastsThunk(location.Key));
  }

  useEffect(() => {
    getAllForecasts();
  }, []);


  return (
    <>
      {weather ? weather.DailyForecasts.map(forecast => (
        <Forecast key={forecast.Date} forecast={forecast} />
      )) : <p>Loading...</p>}
    </>
  )
}

export default Forecasts;
