import { Component, OnInit, Input } from '@angular/core';
import { MoviesProviderService } from '../../services/movies-provider.service';
import { Movies } from 'src/app/movie/interfaces/movies';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie = null;

  constructor() { }

  ngOnInit() {
  }

}
