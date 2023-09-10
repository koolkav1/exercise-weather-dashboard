import { Component } from '@angular/core';
import { Current } from '../../interfaces/weather-api-forecast.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CurrentWeatherSelector } from './store/selectors/current-weather-state.selectors';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  loading: Observable<boolean>;
  loaded: Observable<boolean>;
  currentWeather$: Observable<Current | undefined>;

  constructor(private store: Store) {
    this.loading = this.store.select(CurrentWeatherSelector.selectCurrentWeatherLoading);
    this.loaded = this.store.pipe(select(CurrentWeatherSelector.selectCurrentWeatherLoaded));
    this.currentWeather$ = this.store.pipe(select(CurrentWeatherSelector.selectCurrentWeather));
  }
}
