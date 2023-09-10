import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CurrentWeatherResponse } from '../../../../interfaces/weather-api-current.interface';


export const CurrentWeatherStateActions = createActionGroup({
  source: 'CurrentWeatherState',
  events: {
    'Load CurrentWeatherStates': emptyProps(),
    'Load CurrentWeatherStates Success': props<{ data: CurrentWeatherResponse }>(),
    'Load CurrentWeatherStates Failure': props<{ error: Error }>(),
  }
});
