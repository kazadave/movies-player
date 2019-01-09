import { TestBed } from '@angular/core/testing';

import { MoviesProviderService } from './movies-provider.service';

describe('MoviesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesProviderService = TestBed.get(MoviesProviderService);
    expect(service).toBeTruthy();
  });
});
