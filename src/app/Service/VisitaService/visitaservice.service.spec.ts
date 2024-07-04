import { TestBed } from '@angular/core/testing';

import { VisitaserviceService } from './visitaservice.service';

describe('VisitaserviceService', () => {
  let service: VisitaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
