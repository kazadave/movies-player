import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from '../../services/movies-provider.service';
import { Movies } from '../../interfaces/movies';

@Component({
  selector: 'app-page-movie-list',
  templateUrl: './page-movie-list.component.html',
  styleUrls: ['./page-movie-list.component.css']
})
export class PageMovieListComponent implements OnInit {

  public movies: Movies = null;

  constructor(
    private moviesProvider: MoviesProviderService
  ) { }

  async ngOnInit() {
    this.movies = await this.moviesProvider.fetchMovies();
  }

}
