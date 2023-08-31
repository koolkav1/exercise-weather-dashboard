import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const SearchWeatherActions = createActionGroup({
  source: 'SearchWeather',
  events: {
    'Load SearchWeathers': emptyProps(),
    'Load SearchWeathers Success': props<{ data: unknown }>(),
    'Load SearchWeathers Failure': props<{ error: unknown }>(),
  }
});
