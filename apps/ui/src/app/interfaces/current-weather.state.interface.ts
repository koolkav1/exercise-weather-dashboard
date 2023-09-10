import { DefaultState } from "./default-state.interface";
import { Current, Location } from "./weather-api-forecast.interface";

export interface CurrentWeatherState extends DefaultState {
  current: Current;
  location: Location;
}
