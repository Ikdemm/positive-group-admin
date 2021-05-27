import { TestBed } from '@angular/core/testing';

import { DefaultInviterService } from './default-inviter.service';

describe('DefaultInviterService', () => {
  let service: DefaultInviterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultInviterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
