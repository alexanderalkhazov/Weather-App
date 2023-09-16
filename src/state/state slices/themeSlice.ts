import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../common/types/stateTypes";
import { ThemeEnum } from "../../common/types/enums";

const initialState: ThemeState = {
  theme: ThemeEnum.Light,
};

const setCorrectTheme = (state: ThemeState) => {
  return (
    state.theme === ThemeEnum.Light
      ? { ...state, theme: ThemeEnum.Dark }
      : { ...state, theme: ThemeEnum.Light }
  );
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: setCorrectTheme,
  },
});

const { toggleTheme } = themeSlice.actions;

const selectCurrentTheme = (state: any) => state.themeReducer.theme;

export { selectCurrentTheme, toggleTheme };

export default themeSlice.reducer; 
