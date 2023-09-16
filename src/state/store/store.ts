import { configureStore } from '@reduxjs/toolkit';
import themeReducder from '../state slices/themeSlice';
import forecastsReducer from '../state slices/weatherSlice';
import unitsReducer from '../state slices/unitsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        themeReducer: themeReducder,
        forecastsReducer: forecastsReducer,
        unitsReducer: unitsReducer
    }
});

console.log(store.getState());



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

