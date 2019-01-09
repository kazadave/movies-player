import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { AppComponent } from '../app.component';
import { ContactComponent } from '../components/contact/contact.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListItemComponent,
    MovieProfileComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
