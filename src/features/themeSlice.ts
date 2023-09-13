import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../common/stateTypes";
import { ThemeEnum } from "../common/Enums";

const initialTheme: ThemeState = {
  theme: ThemeEnum.Light,
};

const setCorrectTheme = (state: ThemeState) => {
  return (
    state.theme === ThemeEnum.Light
      ? { ...state, theme: ThemeEnum.Dark }
      : { ...state, theme: ThemeEnum.Light }
  ) as ThemeState;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    toggleTheme: setCorrectTheme,
  },
});

const { toggleTheme } = themeSlice.actions;

const selectCurrentTheme = (state: any) => state.themeReducer.theme;

export { selectCurrentTheme, toggleTheme };

export default themeSlice.reducer; // themeReducer name
