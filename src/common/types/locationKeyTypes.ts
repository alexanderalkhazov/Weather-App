export interface Location {
  Key: string;
  LocalizedName: string;
  Country: {ID: string, LocalizedName: string}
}


export interface CityOption {
  id: string;
  label: string;
}