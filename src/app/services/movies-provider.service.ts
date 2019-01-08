import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesProviderService {

  constructor(private http: HttpClient) { }

  fetchMovies() {
    this.http.get('/assets/movies.json').toPromise()
    .then((response) => {
      console.log(response);
    });
  }
}
