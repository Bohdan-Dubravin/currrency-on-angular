import { TestBed } from '@angular/core/testing';

import { CurrenciesFetchService } from './currencies-fetch.service';

describe('CurrenciesFetchService', () => {
  let service: CurrenciesFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenciesFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
