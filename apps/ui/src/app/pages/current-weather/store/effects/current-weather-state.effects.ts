import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of, async } from 'rxjs';
import { CurrentWeatherStateActions } from '../actions/current-weather-state.actions';
import { WeatherService } from '../../../../services/weather.service';
import { CurrentWeatherResponse } from '../../../../interfaces/weather-api-current.interface';

@Injectable()
export class CurrentWeatherStateEffects {
  constructor(private weather: WeatherService, private actions$: Actions) {}
  loadCurrentWeatherStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CurrentWeatherStateActions.loadCurrentWeatherStates),
      switchMap(() =>
        this.weather.current().pipe(
          take(1),
          map((currentWeather: CurrentWeatherResponse) =>
            CurrentWeatherStateActions.loadCurrentWeatherStatesSuccess({
              data: currentWeather,
            })
          ),
          catchError(async (error: Error) =>
            CurrentWeatherStateActions.loadCurrentWeatherStatesFailure({
              error,
            })
          )
        )
      )
    );
  });
}
