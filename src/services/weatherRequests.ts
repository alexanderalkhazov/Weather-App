import { CustomPosition } from "../common/types/geoLocationTypes";
import { returnKey } from "./keysLogic";
import axiosInstance from "./axiosInstance";

const getCityCodeByCoords = async (geoLoaction: CustomPosition) => {
  const {
    coords: { latitude, longitude },
  } = geoLoaction;
  try {
    const requestUrl = `locations/v1/cities/geoposition/search?apikey=${returnKey()}&q=${latitude},${longitude}`;
    const response = await axiosInstance.get(requestUrl);
    return response.data;
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
};

const getAutoCompleteResults = async (query: string) => {
  try {
    const requestUrl = `locations/v1/cities/autocomplete?apikey=${returnKey()}&q=${query}`;
    const response = await axiosInstance.get(requestUrl);
    return response.data;
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
};

const getForecastByCityCode = async (cityCode: string) => {
  try {
    const requestUrl = `forecasts/v1/daily/5day/${cityCode}?apikey=${returnKey()}&metric=true`;
    const response = await axiosInstance.get(requestUrl);
    return response.data;
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
};

export { getAutoCompleteResults, getCityCodeByCoords, getForecastByCityCode };
