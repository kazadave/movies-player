import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MovieListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'movies/:id',
    component: MovieProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
