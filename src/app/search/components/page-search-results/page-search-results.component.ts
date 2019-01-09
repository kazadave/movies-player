import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from 'src/app/movie/services/movies-provider.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Movies } from 'src/app/movie/interfaces/movies';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-search-results',
  templateUrl: './page-search-results.component.html',
  styleUrls: ['./page-search-results.component.css']
})
export class PageSearchResultsComponent implements OnInit {

  public movies: Movies = null;

  constructor(
    private movieProvider: MoviesProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.displayResults();
      });
  }
  async displayResults() {
    const query = this.route.snapshot.paramMap.get('query');
    console.log({ query });

    const movies = await this.movieProvider.search(query);
    console.log({ movies });

    this.movies = movies;
  }

}
