import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { CurrentWeatherStateActions } from '../actions/current-weather-state/current-weather-state.actions';


@Injectable()
export class CurrentWeatherStateEffects {

  loadCurrentWeatherStates$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CurrentWeatherStateActions.loadCurrentWeatherStates),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CurrentWeatherStateActions.loadCurrentWeatherStatesSuccess({ data })),
          catchError(error => of(CurrentWeatherStateActions.loadCurrentWeatherStatesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
