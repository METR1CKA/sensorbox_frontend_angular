import { TestBed } from '@angular/core/testing';

import { UltrasonicoService } from './ultrasonico.service';

describe('UltrasonicoService', () => {
  let service: UltrasonicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UltrasonicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
