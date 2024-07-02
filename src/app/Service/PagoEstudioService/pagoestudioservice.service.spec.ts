import { TestBed } from '@angular/core/testing';

import { PagoestudioserviceService } from './pagoestudioservice.service';

describe('PagoestudioserviceService', () => {
  let service: PagoestudioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoestudioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
