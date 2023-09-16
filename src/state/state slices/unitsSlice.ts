import { createSlice } from "@reduxjs/toolkit";
import { UnitsEnum } from '../../common/types/enums';
import { UnitsState } from "../../common/types/stateTypes";

const initialState: UnitsState = {
  units: UnitsEnum.Celsius,
};

const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    toggleUnits: (state) => {
      state.units = state.units === UnitsEnum.Celsius ? UnitsEnum.Fahrenheit : UnitsEnum.Celsius;
    },
  },
});

export const selectUnits = (state: any) => state.unitsReducer.units;

export const { toggleUnits } = unitsSlice.actions;

export default unitsSlice.reducer; 