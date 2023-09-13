
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../state/store/store';
import { fetchForecastsThunk, selectAllForecasts } from "../../state/state slices/forecastsSlice";
import { WeatherData } from '../../common/types/forecastTypes';
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
