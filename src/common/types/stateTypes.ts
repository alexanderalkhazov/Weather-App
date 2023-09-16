import { ThunkStatusEnum, UnitsEnum } from "./enums";
import { WeatherData } from "./forecastTypes";
import { Location } from "./locationKeyTypes";

export interface ThemeState {
  theme: "light" | "dark"; 
}

export interface UnitsState {
  units: UnitsEnum.Celsius | UnitsEnum.Fahrenheit;
}

export interface WeatherState {
  currentWeather: WeatherData | null;
  currentLocation: Location | null;
  status: ThunkStatusEnum;
  error: boolean;
  locations: Location[] | null;
  favourites: WeatherData | null;
}