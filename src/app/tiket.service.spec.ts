import { TestBed } from '@angular/core/testing';

import { TiketService } from './tiket.service';

describe('TiketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiketService = TestBed.get(TiketService);
    expect(service).toBeTruthy();
  });
});
