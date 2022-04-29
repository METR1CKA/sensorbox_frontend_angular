import { TestBed } from '@angular/core/testing';

import { HumoService } from './humo.service';

describe('HumoService', () => {
  let service: HumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
