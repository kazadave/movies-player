import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

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
    loadChildren: './movie/movie.module#MovieModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
