import { TestBed } from '@angular/core/testing';

import { ClienteguardGuard } from './clienteguard.guard';

describe('ClienteguardGuard', () => {
  let guard: ClienteguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClienteguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
