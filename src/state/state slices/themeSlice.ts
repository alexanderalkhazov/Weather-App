import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../common/types/stateTypes";
import { ThemeEnum } from "../../common/types/enums";

const initialState: ThemeState = {
  theme: ThemeEnum.Light,
};

const setCorrectTheme = (
  state: ThemeState
) => state.theme === ThemeEnum.Light ? 
{ ...state, theme: ThemeEnum.Dark }: 
{ ...state, theme: ThemeEnum.Light };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: setCorrectTheme,
  },
});

const { toggleTheme } = themeSlice.actions;

const selectTheme = (state: any) => state.themeState;

export { selectTheme, toggleTheme };

export default themeSlice.reducer;
