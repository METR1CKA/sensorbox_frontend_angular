import { TestBed } from '@angular/core/testing';

import { PrecensiaService } from './precensia.service';

describe('PrecensiaService', () => {
  let service: PrecensiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecensiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
