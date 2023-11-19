import { TestBed } from '@angular/core/testing';

import { GmpNumberService } from './gmp-number.service';

describe('GmpNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpNumberService = TestBed.get(GmpNumberService);
    expect(service).toBeTruthy();
  });
});
