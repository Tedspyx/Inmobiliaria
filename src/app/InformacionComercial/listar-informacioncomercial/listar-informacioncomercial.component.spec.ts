import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInformacioncomercialComponent } from './listar-informacioncomercial.component';

describe('ListarInformacioncomercialComponent', () => {
  let component: ListarInformacioncomercialComponent;
  let fixture: ComponentFixture<ListarInformacioncomercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarInformacioncomercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarInformacioncomercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
