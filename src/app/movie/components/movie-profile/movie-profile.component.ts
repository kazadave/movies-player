import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesProviderService } from 'src/app/movie/services/movies-provider.service';
import { Movie } from 'src/app/movie/interfaces/movie';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.css']
})
export class MovieProfileComponent implements OnInit {

  @Input() movie: Movie = null;

  constructor() { }

 async ngOnInit() {
  }

}
