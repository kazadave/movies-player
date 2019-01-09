import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';

const routes: Routes = [
{
  path: '',
  component: MovieListComponent
},
{
  path: ':id',
  component: MovieProfileComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
