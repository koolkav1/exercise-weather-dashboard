import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { SearchWeatherActions } from '../actions/search-weather.actions';


@Injectable()
export class SearchWeatherEffects {

  loadSearchWeathers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SearchWeatherActions.loadSearchWeathers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SearchWeatherActions.loadSearchWeathersSuccess({ data })),
          catchError(error => of(SearchWeatherActions.loadSearchWeathersFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
