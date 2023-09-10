import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, first, tap } from 'rxjs';
import { CurrentWeatherStateActions } from '../store/actions/current-weather-state.actions';

export const loadCurrentWeatherResolver: ResolveFn<boolean> = () => {
  const store =  inject(Store);
  let loading = false;
  return store.pipe(
    tap(() => {
      if(!loading) {
        loading = true;
        store.dispatch(
          CurrentWeatherStateActions.loadCurrentWeatherStates()
        )
      }
    }),
    first(),
    finalize(() => loading = false)
  )
};

// return store.pipe(
//   tap(() => {
//   if(!loading){
//    loading = true;
//    store.dispatch(
//     loadCategoriesByParentCategoryCodeRequest({
//       parentCategoryCode: null }))
//    }
//  }),
//  first(),
//  finalize(() => loading = false)
// );
// };
