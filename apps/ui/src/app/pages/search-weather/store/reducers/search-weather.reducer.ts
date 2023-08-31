import { createFeature, createReducer, on } from '@ngrx/store';
import { SearchWeatherActions } from '../actions/search-weather.actions';

export const searchWeatherFeatureKey = 'searchWeather';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(SearchWeatherActions.loadSearchWeathers, state => state),
  on(SearchWeatherActions.loadSearchWeathersSuccess, (state, action) => state),
  on(SearchWeatherActions.loadSearchWeathersFailure, (state, action) => state),
);

export const searchWeatherFeature = createFeature({
  name: searchWeatherFeatureKey,
  reducer,
});

