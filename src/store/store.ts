import { configureStore } from '@reduxjs/toolkit';
import themeReducder from '../features/themeSlice';
import forecastsReducer from '../features/forecastsSlice';
import unitsReducer from '../features/unitsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        themeReducer: themeReducder,
        forecastsReducer: forecastsReducer,
        unitsReducer: unitsReducer
        // favouritesReducer
        // currentlocation reducer 
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

