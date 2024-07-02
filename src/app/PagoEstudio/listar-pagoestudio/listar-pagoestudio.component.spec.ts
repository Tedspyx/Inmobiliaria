import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPagoestudioComponent } from './listar-pagoestudio.component';

describe('ListarPagoestudioComponent', () => {
  let component: ListarPagoestudioComponent;
  let fixture: ComponentFixture<ListarPagoestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPagoestudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPagoestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
