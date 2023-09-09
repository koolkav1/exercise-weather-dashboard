import { Current, Location } from "./weather-api-forecast.interface";

export interface CurrentWeatherResponse {
  current: Current;
  location: Location
}
