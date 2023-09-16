import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAutoCompleteResults,
  getCityCodeByCoords,
  getForecastByCityCode,
} from "../../services/weatherRequests";
import { getCoords } from "../../services/getCoords";
import { ThunkStatusEnum } from "../../common/types/enums";
import { RootState } from "../store/store";
import { WeatherState } from "../../common/types/stateTypes";

export const fetchForecastsThunk = createAsyncThunk(
  "fetchWeatherThunk",
  async (location?: string) => {
    if (location) {
      const forecastsResult = await getForecastByCityCode(location);
      return forecastsResult;
    }
  }
);

export const fetchLocationByCoordsThunk = createAsyncThunk(
  "fetchLocationByCoordsThunk",
  async () => {
    const geoLoaction = await getCoords();
    const location = await getCityCodeByCoords(geoLoaction);
    return location;
  }
);

export const fetchLocationOptionsThunk = createAsyncThunk(
  "fetchLocationOptionsThunk",
  async (city: string) => {
    const locationOptions = await getAutoCompleteResults(city);
    return locationOptions;
  }
);

const initialState: WeatherState = {
  currentWeather: null,
  currentLocation: null,
  status: ThunkStatusEnum.IDLE,
  error: false,
  locations: null,
  favourites: null,
};

const forecastsSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLocationByCoordsThunk.fulfilled, (state, action) => {
      state.status = ThunkStatusEnum.SUCCESS;
      state.currentLocation = action.payload;
    });
    builder.addCase(fetchLocationByCoordsThunk.pending, (state, _) => {
      state.status = ThunkStatusEnum.LOADING;
    });
    builder.addCase(fetchLocationByCoordsThunk.rejected, (state, action) => {
      state.status = ThunkStatusEnum.FAILED;
      state.error = action.error ? true : false;
    });
    builder.addCase(fetchLocationOptionsThunk.fulfilled, (state, action) => {
      state.status = ThunkStatusEnum.SUCCESS;
      state.locations = action.payload;
    });
    builder.addCase(fetchLocationOptionsThunk.pending, (state, _) => {
      state.status = ThunkStatusEnum.LOADING;
    });
    builder.addCase(fetchLocationOptionsThunk.rejected, (state, action) => {
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

export const selectCurrentLocation = (state: RootState) =>
  state.forecastsReducer.currentLocation;

export const selectForecastStatus = (state: RootState) =>
  state.forecastsReducer.status;

export const selectLocations = (state: RootState) =>
  state.forecastsReducer.locations;

export const { setCurrentWeather } = forecastsSlice.actions;

export default forecastsSlice.reducer;
