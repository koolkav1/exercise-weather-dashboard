/* eslint-disable @nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  Environment from 'apps/ui/environment.json'
import { SearchWeatherResponse } from '../interfaces/weather-api-search.interface';
import { ForecastWeatherResponse } from '../interfaces/weather-api-forecast.interface';
import { CurrentWeatherResponse } from '../interfaces/weather-api-current.interface';
@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  search(searchString: string): Observable<SearchWeatherResponse[]> {
    const url = Environment.interactiveWeatherAPI.apiUrl;
    const key = Environment.interactiveWeatherAPI.apiKey;
    return this.http.get<SearchWeatherResponse[]>(`${url}/search.json?key=${key}&q=${searchString}`);
  }

  forecast(location: string): Observable<ForecastWeatherResponse> {
    const url = Environment.interactiveWeatherAPI.apiUrl;
    const key = Environment.interactiveWeatherAPI.apiKey;
    return this.http.get<ForecastWeatherResponse>(`${url}/forecast.json?key=${key}&q=${location}&days=7`);
  }

  current(): Observable<CurrentWeatherResponse> {
    const url = Environment.interactiveWeatherAPI.apiUrl;
    const key = Environment.interactiveWeatherAPI.apiKey;
    return this.http.get<CurrentWeatherResponse>(`${url}/current.json?key=${key}&q=London&aqi=no`);
  }
}
