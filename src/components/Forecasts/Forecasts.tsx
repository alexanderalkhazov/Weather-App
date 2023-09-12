
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { fetchForecastsThunk, selectAllForecasts } from "../../features/forecastsSlice";
import { WeatherData } from '../../common/forecastTypes';
import Forecast from '../Forecast/Forecast';


const Forecasts = () => {

  const dispatch = useAppDispatch()
  const forecasts: WeatherData = useAppSelector(selectAllForecasts);
  

  const getAllForecasts = async () => {
      dispatch(fetchForecastsThunk());
  }

  useEffect(() => {
     getAllForecasts();

  }, [])

  return (

    <>
      {forecasts ? forecasts.DailyForecasts.map((forecast) => (
        <Forecast key={forecast.Date} forecast={forecast} />
      )): null}
    </>

  )
}

export default Forecasts;
