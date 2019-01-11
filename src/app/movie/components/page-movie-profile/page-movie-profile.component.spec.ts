import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieProfileComponent } from './page-movie-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { PageMovieListComponent } from '../page-movie-list/page-movie-list.component';
import { MovieProfileComponent } from '../movie-profile/movie-profile.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';

describe('PageMovieProfileComponent', () => {
  let component: PageMovieProfileComponent;
  let fixture: ComponentFixture<PageMovieProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientModule],
      declarations: [ PageMovieProfileComponent, MovieProfileComponent, MovieListComponent, MovieListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
