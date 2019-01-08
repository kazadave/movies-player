import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from '../../services/movies-provider.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(
    private movies: MoviesProviderService
  ) { }

  ngOnInit() {
    this.movies.fetchMovies();
  }

}
