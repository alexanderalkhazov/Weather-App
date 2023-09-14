import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAutoCompleteResults,
  getCityCodeByCoords,
  getForecastByCityCode,
} from "../../services/weatherRequests";
import { WeatherData } from "../../common/types/forecastTypes";
import { getCoords } from "../../services/getCoords";
import { Location } from "../../common/types/locationKeyTypes";
import { ThunkStatusEnum } from "../../common/types/enums";
import { RootState } from "../store/store";

export const fetchForecastsThunk = createAsyncThunk(
  "fetchWeatherThunk",
  async (cityKey?: string) => {
    const geoLoaction = await getCoords();
    const cityCode: Location = await getCityCodeByCoords(geoLoaction);
    if (cityKey) {
      const forecastsResult = await getForecastByCityCode(cityKey);
      return forecastsResult;
    } else {
      const forecastsResult = await getForecastByCityCode(cityCode.Key);
      return forecastsResult;
    }
  }
);

export const fetchLocationsThunk = createAsyncThunk(
  "fetchLocationsThunk",
  async (city: string) => {
    return await getAutoCompleteResults(city);
  }
);

interface WeatherState {
  currentWeather: WeatherData | null;
  status: ThunkStatusEnum;
  error: boolean;
  locations: Location[] | null;
  favourites: WeatherData | null;
}

const initialState: WeatherState = {
  currentWeather: null,
  status: ThunkStatusEnum.IDLE,
  error: false,
  locations: null,
  favourites: null,
};

const forecastsSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentWeather = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLocationsThunk.fulfilled, (state, action) => {
      state.status = ThunkStatusEnum.SUCCESS;
      state.locations = action.payload;
    });
    builder.addCase(fetchLocationsThunk.pending, (state, _) => {
      state.status = ThunkStatusEnum.LOADING;
    });
    builder.addCase(fetchLocationsThunk.rejected, (state, action) => {
      state.status = ThunkStatusEnum.FAILED;
      state.error = action.error ? true : false;
    });
    builder.addCase(fetchForecastsThunk.fulfilled, (state, action) => {
      state.status = ThunkStatusEnum.SUCCESS;
      state.currentWeather = action.payload;
    });
    builder.addCase(fetchForecastsThunk.pending, (state, _) => {
      state.status = ThunkStatusEnum.LOADING;
    });
    builder.addCase(fetchForecastsThunk.rejected, (state, action) => {
      state.status = ThunkStatusEnum.FAILED;
      state.error = action.error ? true : false;
    });
  },
});

export const selectAllForecasts = (state: RootState) =>
  state.forecastsReducer.currentWeather;

export const selectLocationsStatus = (state: RootState) =>
  state.forecastsReducer.status;

export const selectLocations = (state: RootState) =>
  state.forecastsReducer.locations;

export const { setCurrentLocation } = forecastsSlice.actions;

export default forecastsSlice.reducer;
