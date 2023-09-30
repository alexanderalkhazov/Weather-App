import {
  fetchForecasts,
  fetchLocationByCoords,
  selectWeather,
} from "../../../state/state slices/weatherSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/store/store";

const useForecasts = () => {

  const dispatch = useAppDispatch();
  const { currentWeather } = useAppSelector(selectWeather);
  
  const getAllForecasts = async () => {
    const payLoadCoords = await dispatch(fetchLocationByCoords());
    const location = payLoadCoords.payload;
    dispatch(fetchForecasts(location.Key));
  };

  useEffect(() => {
    getAllForecasts();
  }, []);

  return currentWeather;
};

export { useForecasts };
