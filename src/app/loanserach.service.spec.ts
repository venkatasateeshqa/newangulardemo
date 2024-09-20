import { TestBed } from '@angular/core/testing';

import { LoanserachService } from './loanserach.service';

describe('LoanserachService', () => {
  let service: LoanserachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanserachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
