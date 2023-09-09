import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { take } from 'rxjs';

@Component({
  selector: 'exercise-weather-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onClick(event:any): void {
    console.log(event);
  }
}
