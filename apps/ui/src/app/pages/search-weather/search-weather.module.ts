import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchWeatherComponent } from './search-weather.component';
import { Routes, RouterModule } from '@angular/router';
import { CardModule } from '../../components/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../../components/search/search.module';


const routes: Routes = [
  {
    path: '',
    component: SearchWeatherComponent,
  },
];

@NgModule({
  declarations: [SearchWeatherComponent],
  imports: [
  CommonModule,
  CardModule,
  RouterModule.forChild(routes),
  SearchModule
],
exports: [RouterModule],
})
export class SearchWeatherModule {}
