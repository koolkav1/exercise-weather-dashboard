import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrentWeatherState from '../reducers/current-weather-state.reducer';
import { CurrentWeatherState } from '../../../../interfaces/current-weather.state.interface';
import { Current, Location } from '../../../../interfaces/weather-api-forecast.interface';

export const selectCurrentWeatherState = createFeatureSelector<fromCurrentWeatherState.State>(
  fromCurrentWeatherState.currentWeatherStateFeatureKey
);

export const loadCurrentWeatherFromState = createSelector(selectCurrentWeatherState, (state: fromCurrentWeatherState.State) => state.currentWeather);

const getCurrentWeather = (state: CurrentWeatherState): Current => state.current;
const getCurrentWeatherLocation = (state: CurrentWeatherState): Location => state.location;
const getCurrentWeatherLoading = (state: CurrentWeatherState): boolean => state.loading;
const getCurrentWeatherLoaded = (state: CurrentWeatherState): boolean => state.loaded;

const selectCurrentWeather = createSelector(loadCurrentWeatherFromState, getCurrentWeather);
const selectCurrentWeatherLocation = createSelector(loadCurrentWeatherFromState, getCurrentWeatherLocation);
const selectCurrentWeatherLoading = createSelector(loadCurrentWeatherFromState, getCurrentWeatherLoading);
const selectCurrentWeatherLoaded = createSelector (loadCurrentWeatherFromState, getCurrentWeatherLoaded);

export const CurrentWeatherSelector = {
  selectCurrentWeather,
  selectCurrentWeatherLoaded,
  selectCurrentWeatherLoading,
  selectCurrentWeatherLocation
}
