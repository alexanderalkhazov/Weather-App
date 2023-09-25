import { useEffect } from "react";
import { WeatherData } from "../../../common/types/forecastTypes";
import { fetchForecastsThunk, fetchLocationByCoordsThunk, selectAllForecasts } from "../../../state/state slices/weatherSlice";
import { useAppDispatch, useAppSelector } from "../../../state/store/store";

const useForecasts = () => {
  const dispatch = useAppDispatch();
  const weather: WeatherData | null = useAppSelector(selectAllForecasts);

  const getAllForecasts = async () => {
    const payLoadCoords = await dispatch(fetchLocationByCoordsThunk());
    const location = payLoadCoords.payload;
    dispatch(fetchForecastsThunk(location.Key));
  };

  useEffect(() => {
    getAllForecasts();
  }, []);

  return weather;
};


export {
    useForecasts
}