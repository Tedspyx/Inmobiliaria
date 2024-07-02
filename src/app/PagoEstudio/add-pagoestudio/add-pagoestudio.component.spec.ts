import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPagoestudioComponent } from './add-pagoestudio.component';

describe('AddPagoestudioComponent', () => {
  let component: AddPagoestudioComponent;
  let fixture: ComponentFixture<AddPagoestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPagoestudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPagoestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
