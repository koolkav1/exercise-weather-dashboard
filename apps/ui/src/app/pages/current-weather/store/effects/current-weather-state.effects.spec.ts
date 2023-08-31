import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentWeatherStateEffects } from './current-weather-state.effects';

describe('CurrentWeatherStateEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentWeatherStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentWeatherStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CurrentWeatherStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
