import { TestBed, inject } from '@angular/core/testing';

import { GetPokeService } from './get-poke.service';

describe('GetPokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPokeService]
    });
  });

  it('should be created', inject([GetPokeService], (service: GetPokeService) => {
    expect(service).toBeTruthy();
  }));
});
