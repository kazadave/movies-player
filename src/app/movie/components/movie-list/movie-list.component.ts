import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from '../../services/movies-provider.service';
import { Movies } from 'src/app/movie/interfaces/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies: Movies = null;

  constructor(
    private moviesProvider: MoviesProviderService
  ) { }

  ngOnInit() {
    this.moviesProvider.fetchMovies()
    .then((movies: Movies) => {
      this.movies = movies;
    });
  }

}
