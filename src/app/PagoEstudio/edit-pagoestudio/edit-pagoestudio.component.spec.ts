import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPagoestudioComponent } from './edit-pagoestudio.component';

describe('EditPagoestudioComponent', () => {
  let component: EditPagoestudioComponent;
  let fixture: ComponentFixture<EditPagoestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPagoestudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPagoestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
