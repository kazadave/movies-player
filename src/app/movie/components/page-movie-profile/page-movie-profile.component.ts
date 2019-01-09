import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../../interfaces/movies';
import { environment } from 'src/environments/environment';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesProviderService } from '../../services/movies-provider.service';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

  public movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private moviesProvider: MoviesProviderService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log({id});
    const movie = await this.moviesProvider.fetchMovieById(id);
    console.log({movie});

    this.movie = movie;
  }


}
