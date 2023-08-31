import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CurrentWeatherStateActions = createActionGroup({
  source: 'CurrentWeatherState',
  events: {
    'Load CurrentWeatherStates': emptyProps(),
    'Load CurrentWeatherStates Success': props<{ data: unknown }>(),
    'Load CurrentWeatherStates Failure': props<{ error: unknown }>(),
  }
});
