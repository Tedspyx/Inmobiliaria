import { TestBed } from '@angular/core/testing';

import { SucursalesServiceService } from './sucursales-service.service';

describe('SucursalesServiceService', () => {
  let service: SucursalesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucursalesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
