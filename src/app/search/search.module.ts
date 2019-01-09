import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { MovieModule } from '../movie/movie.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MovieModule
  ]
})
export class SearchModule { }
