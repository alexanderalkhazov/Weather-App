import { configureStore } from '@reduxjs/toolkit';
import themeReducder from '../features/themeSlice';

export const store = configureStore({
    reducer: {
        themeSet: themeReducder,
    }
});