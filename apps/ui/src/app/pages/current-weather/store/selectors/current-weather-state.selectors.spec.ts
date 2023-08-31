import * as fromCurrentWeatherState from '../../reducers/current-weather-state/current-weather-state.reducer';
import { selectCurrentWeatherStateState } from './current-weather-state.selectors';

describe('CurrentWeatherState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCurrentWeatherStateState({
      [fromCurrentWeatherState.currentWeatherStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
