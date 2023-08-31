import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SearchWeatherEffects } from './search-weather.effects';

describe('SearchWeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchWeatherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchWeatherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SearchWeatherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
