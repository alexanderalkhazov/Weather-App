import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../types/state types/stateTypes";
import { useSelector } from "react-redux";

const initialTheme: ThemeState = {
    theme: 'light',
};

const setCorrectTheme = (state: ThemeState): ThemeState => {
    return (state.theme === 'light' ? {...state, theme: 'dark'} : {...state,theme:'light'}) as ThemeState;
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialTheme,
    reducers: {
        toggleTheme: setCorrectTheme,
    }
})

const { toggleTheme } = themeSlice.actions; 

const getCurrentTheme = () => {
    return useSelector((state: any) => state.themeSet.theme);
}

export {
    getCurrentTheme,
    toggleTheme
}

export default themeSlice.reducer; // themeReducer name