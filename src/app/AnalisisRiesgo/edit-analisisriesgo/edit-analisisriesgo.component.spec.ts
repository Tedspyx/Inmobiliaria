import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnalisisriesgoComponent } from './edit-analisisriesgo.component';

describe('EditAnalisisriesgoComponent', () => {
  let component: EditAnalisisriesgoComponent;
  let fixture: ComponentFixture<EditAnalisisriesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAnalisisriesgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAnalisisriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
