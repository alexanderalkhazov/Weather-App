import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
    theme: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialTheme,
    reducers: {
        toggleTheme: (state) => state.theme === 'light' ? {...state, theme: 'dark'} : {...state,theme:'light'}
    }
})

export const { toggleTheme } = themeSlice.actions; // actions
export default themeSlice.reducer; // theme reducer