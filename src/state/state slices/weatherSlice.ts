import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCoords } from "../../services/getCoords";
import { ThunkStatusEnum } from "../../common/types/enums";
import { RootState } from "../store/store";
import { WeatherState } from "../../common/types/stateTypes";
import {
  getAutoCompleteResults,
  getCityCodeByCoords,
  getForecastByCityCode,
} from "../../services/weatherRequests";

const fetchForecasts = createAsyncThunk(
  "fetchWeatherThunk",
  async (location?: string) => {
    if (location) {
      const forecastsResult = await getForecastByCityCode(location);
      return forecastsResult;
    }
  }
);

const fetchLocationByCoords = createAsyncThunk(
  "fetchLocationByCoordsThunk",
  async () => {
    const geoLoaction = await getCoords();
    const location = await getCityCodeByCoords(geoLoaction);
    return location;
  }
);

const fetchLocations = createAsyncThunk(
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
    builder.addCase(fetchLocationByCoords.fulfilled, (state, action) => {
      state.status = ThunkStatusEnum.SUCCESS;
      state.currentLocation = action.payload;
    });
    builder.addCase(fetchLocationByCoords.pending, (state, _) => {
      state.status = ThunkStatusEnum.LOADING;
    });
    builder.addCase(fetchLocationByCoords.rejected, (state, action) => {
      state.status = ThunkStatusEnum.FAILED;
      state.error = action.error ? true : false;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.status = ThunkStatusEnum.SUCCESS;
      state.locations = action.payload;
    });
    builder.addCase(fetchLocations.pending, (state, _) => {
      state.status = ThunkStatusEnum.LOADING;
    });
    builder.addCase(fetchLocations.rejected, (state, action) => {
      state.status = ThunkStatusEnum.FAILED;
      state.error = action.error ? true : false;
    });
    builder.addCase(fetchForecasts.fulfilled, (state, action) => {
      state.status = ThunkStatusEnum.SUCCESS;
      state.currentWeather = action.payload;
    });
    builder.addCase(fetchForecasts.pending, (state, _) => {
      state.status = ThunkStatusEnum.LOADING;
    });
    builder.addCase(fetchForecasts.rejected, (state, action) => {
      state.status = ThunkStatusEnum.FAILED;
      state.error = action.error ? true : false;
    });
  },
});

const selectWeather = (state: RootState) => state.weatherState;

const { setCurrentWeather } = forecastsSlice.actions;

export {
  selectWeather,
  setCurrentWeather,
  fetchForecasts,
  fetchLocationByCoords,
  fetchLocations,
};

export default forecastsSlice.reducer;
