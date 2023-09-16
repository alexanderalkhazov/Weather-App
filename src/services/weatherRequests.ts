import axios from "axios";
import { sample } from "lodash";
import { CustomPosition } from "../common/types/geoLocationTypes";

const API_URL = 'http://dataservice.accuweather.com';

const keys = [
  "dZGbngzuriVeCTAlBNBaATU1aKGzgIwL",
  "wiTcFiz9vubqECBVWikv5rWFJrl4KoaD",
];

const returnKey = () => sample(keys);

const getCityCodeByCoords = async (geoLoaction: CustomPosition) => {
  const { coords: {latitude,longitude }} = geoLoaction;
  try {
    const requestUrl = `${API_URL}/locations/v1/cities/geoposition/search?apikey=${returnKey()}&q=${latitude},${longitude}`;
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
};

const getAutoCompleteResults = async (query: string) => {
  try {
    const requestUrl = `${API_URL}/locations/v1/cities/autocomplete?apikey=${returnKey()}&q=${query}`;
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
};

const getForecastByCityCode = async (cityCode: string) => {
  try {
    const requestUrl = `${API_URL}/forecasts/v1/daily/5day/${cityCode}?apikey=${returnKey()}&metric=true`;
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
};

export { getAutoCompleteResults, getCityCodeByCoords, getForecastByCityCode };
