import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnalisisriesgoComponent } from './listar-analisisriesgo.component';

describe('ListarAnalisisriesgoComponent', () => {
  let component: ListarAnalisisriesgoComponent;
  let fixture: ComponentFixture<ListarAnalisisriesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAnalisisriesgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAnalisisriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
