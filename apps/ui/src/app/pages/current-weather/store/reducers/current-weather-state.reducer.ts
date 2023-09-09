import { createFeature, createReducer, on } from '@ngrx/store';
import { CurrentWeatherStateActions } from '../actions/current-weather-state.actions';

export const currentWeatherStateFeatureKey = 'currentWeatherState';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(CurrentWeatherStateActions.loadCurrentWeatherStates, state => state),
  on(CurrentWeatherStateActions.loadCurrentWeatherStatesSuccess, (state, action) => state),
  on(CurrentWeatherStateActions.loadCurrentWeatherStatesFailure, (state, action) => state),
);

export const currentWeatherStateFeature = createFeature({
  name: currentWeatherStateFeatureKey,
  reducer,
});

