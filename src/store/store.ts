import { configureStore } from '@reduxjs/toolkit';
import themeReducder from '../slices/themeSlice';

export const store = configureStore({
    reducer: {
        themeSet: themeReducder,
    }
})