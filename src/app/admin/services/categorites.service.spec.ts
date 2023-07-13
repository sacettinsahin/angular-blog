import { TestBed } from '@angular/core/testing';

import { CategoritesService } from './categorites.service';

describe('CategoritesService', () => {
  let service: CategoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
