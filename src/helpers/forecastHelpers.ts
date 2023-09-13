import { format } from "date-fns-tz";
import { UnitsEnum } from "../common/types/enums";

const formatDate = (dateString: string) => {
  const formatString = "dd-MM-yyyy";

  const formattedDate = format(new Date(dateString), formatString, {
    timeZone: "Etc/GMT+3",
  });
  return formattedDate;
};


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

export { formatDate, setTempAndUnits };
