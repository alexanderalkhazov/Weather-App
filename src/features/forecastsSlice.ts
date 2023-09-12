import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { getCityCodeByCoords, getForecastByCityCode } from '../services/weatherRequests';
import { WeatherData } from '../common/forecastTypes';
import { getCoords } from '../services/getCoords';
import { LocationKey } from '../common/locationKeyTypes';

export const fetchForecastsThunk = createAsyncThunk('fetchForecastsThunk', async () => {
    const geoLoaction = await getCoords();
    const cityCode: LocationKey  = await getCityCodeByCoords(geoLoaction); 
    const forecastsResult = await getForecastByCityCode(cityCode.Key);
    return forecastsResult;
});

type Status = 'idle' | 'success' | 'failed' | 'loading'

interface ForecastsState {
    forecasts: WeatherData | null;
    status: Status;
    error: boolean;
}

const initialState: ForecastsState = {
    forecasts: null,
    status: 'idle',
    error: false
}

const forecastsSlice = createSlice({
    name: 'forecasts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchForecastsThunk.pending, (state, _) => {
            state.status = 'loading';
        })
        builder.addCase(fetchForecastsThunk.fulfilled, (state,action) => {
            state.status = 'success';
            state.forecasts = action.payload;
        })
        builder.addCase(fetchForecastsThunk.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error ? true : false;
        })
    }
})

export const selectAllForecasts = (state: any) => state.forecastsReducer.forecasts;
export const selectForecastsError = (state: any) => state.forecastsReducer.error;
export const selectForecastsStatus = (state: any) => state.forecastsReducer.status;

export default forecastsSlice.reducer;