import { configureStore } from '@reduxjs/toolkit';
import themeReducder from '../state slices/themeSlice';
import forecastsReducer from '../state slices/weatherSlice';
import unitsReducer from '../state slices/unitsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        themeState: themeReducder,
        weatherState: forecastsReducer,
        unitsState: unitsReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
    store,
    useAppDispatch,
    useAppSelector,
    type RootState, 
    type AppDispatch
}

