import { TestBed } from '@angular/core/testing';

import { InformacioncomercialserviceService } from './informacioncomercialservice.service';

describe('InformacioncomercialserviceService', () => {
  let service: InformacioncomercialserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacioncomercialserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
