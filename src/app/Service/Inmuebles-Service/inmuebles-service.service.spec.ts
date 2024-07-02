import { TestBed } from '@angular/core/testing';

import { InmueblesserviceService } from './inmuebles-service.service';

describe('InmueblesServiceService', () => {
  let service: InmueblesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmueblesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
