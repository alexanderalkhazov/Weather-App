import { format } from "date-fns-tz";
import { UnitsEnum } from "../common/types/enums";
import { Location } from "../common/types/locationKeyTypes";

const formatDate = (dateString: string) => {
  const formatString = "dd-MM-yyyy";
  const formattedDate = format(new Date(dateString), formatString, {
    timeZone: "Etc/GMT+3",
  });
  return formattedDate;
};

const modifyOptions = (locations: Location[]) => {
  if (!locations) return [];
  return locations.map((location: Location) => ({
      id: location.Key,
      label: `${location.Country.ID} ${location.LocalizedName}`
  }))
}

const setTempAndUnits = (celsiusValue: number, currentUnitState: string) => {
  const modifiedFarenheit = `${Math.floor(celsiusValue * (9/5) + 32)} °F`;
  const modifiedCelsius = `${Math.floor(celsiusValue)} °C`;
  switch (currentUnitState) {
    case UnitsEnum.Celsius:
      return modifiedCelsius;
    case UnitsEnum.Fahrenheit:
      return modifiedFarenheit;
    default:
      return modifiedCelsius;
  }
};

export { formatDate, setTempAndUnits, modifyOptions };
