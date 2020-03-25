import { TestBed } from '@angular/core/testing';

import { ListmovieService } from './listmovie.service';

describe('ListmovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListmovieService = TestBed.get(ListmovieService);
    expect(service).toBeTruthy();
  });
});
