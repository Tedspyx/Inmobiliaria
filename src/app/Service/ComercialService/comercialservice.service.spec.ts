import { TestBed } from '@angular/core/testing';

import { ComercialserviceService } from './comercialservice.service';

describe('ComercialserviceService', () => {
  let service: ComercialserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComercialserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
