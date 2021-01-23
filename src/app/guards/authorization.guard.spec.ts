import { TestBed } from '@angular/core/testing';

import { SimpleAuthorizationExampleGuard } from './simple-authorization-example-guard.guard';

describe('SimpleAuthorizationExampleGuardGuard', () => {
  let guard: SimpleAuthorizationExampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SimpleAuthorizationExampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
