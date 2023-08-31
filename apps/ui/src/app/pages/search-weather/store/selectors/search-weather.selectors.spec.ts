import * as fromSearchWeather from '../../reducers/search-weather.reducer';
import { selectSearchWeatherState } from './search-weather.selectors';

describe('SearchWeather Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSearchWeatherState({
      [fromSearchWeather.searchWeatherFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
