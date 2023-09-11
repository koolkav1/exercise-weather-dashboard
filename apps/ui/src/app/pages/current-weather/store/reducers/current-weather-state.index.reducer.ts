import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { CurrentWeatherState } from "../../../../interfaces/current-weather.state.interface";
import * as fromCurrentWeatherReducer from './current-weather-state.reducer';


export const currentWeatherStateFeatureKey = 'currentWeatherState';

export interface CurrentWeatherFeatureState {
  currentWeather: CurrentWeatherState,
}

export const reducers: ActionReducerMap<CurrentWeatherFeatureState> = {
  currentWeather: fromCurrentWeatherReducer.reducer
}

export const getCurrentWeatherFeatureState =
  createFeatureSelector<CurrentWeatherFeatureState>(currentWeatherStateFeatureKey);
