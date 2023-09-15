import { format } from "date-fns-tz";
import { UnitsEnum } from "../common/types/enums";
import { Location } from "../common/types/locationKeyTypes";
import { nanoid } from "@reduxjs/toolkit";

const formatDate = (dateString: string) => {
  const formatString = "dd-MM-yyyy";

  const formattedDate = format(new Date(dateString), formatString, {
    timeZone: "Etc/GMT+3",
  });
  return formattedDate;
};

const modifyOptions = (locations: Location[]) => {
  if (!locations) return [];
  return locations.map((location: Location,index: number) => ({
      id: index + 1,
      label: location.LocalizedName,
      cityKey: location.Key
  }))
}

const setTempAndUnits = (celsiusValue: number, currentUnitState: string) => {
  let modifiedFarenheit = `${Math.round(((celsiusValue * (9/5)) + (32)))} °F`;
  let modifiedCelsius = `${Math.round(celsiusValue)} °C`;
  switch (currentUnitState) {
    case UnitsEnum.Celsius:
      return modifiedCelsius;
    case UnitsEnum.Fahrenheit:
      return modifiedFarenheit;
    default:
      modifiedCelsius;
  }
};

export { formatDate, setTempAndUnits, modifyOptions };
