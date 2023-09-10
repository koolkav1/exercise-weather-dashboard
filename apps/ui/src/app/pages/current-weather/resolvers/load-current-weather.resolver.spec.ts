import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { loadCurrentWeatherResolver } from './load-current-weather.resolver';

describe('loadCurrentWeatherResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => loadCurrentWeatherResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
