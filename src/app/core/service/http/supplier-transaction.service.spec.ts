import { TestBed } from '@angular/core/testing';

import { SupplierTransactionService } from './supplier-transaction.service';

describe('SupplierTransactionService', () => {
  let service: SupplierTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
