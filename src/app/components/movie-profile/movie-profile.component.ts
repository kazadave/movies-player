import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesProviderService } from 'src/app/services/movies-provider.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.css']
})
export class MovieProfileComponent implements OnInit {

  movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private moviesProvider: MoviesProviderService
  ) { }

 async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log({ id });

    const movie = await this.moviesProvider.fetchMovieById(id);
    console.log({ movie });

    this.movie = movie;
  }

}
