import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'movies',
    loadChildren: './movie/movie.module#MovieModule'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes,
   { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
