import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../common/stateTypes";

const initialTheme: ThemeState = {
    theme: 'light',
};

const setCorrectTheme = (state: ThemeState): ThemeState => {
    return (state.theme === 'light' ? {...state, theme: 'dark'} : {...state,theme:'light'}) as ThemeState;
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialTheme,
    reducers: {
        toggleTheme: setCorrectTheme,
    }
});

const { toggleTheme } = themeSlice.actions; 

const selectCurrentTheme = (state: any) => state.themeReducer.theme;

export {
    selectCurrentTheme,
    toggleTheme
};

export default themeSlice.reducer; // themeReducer name