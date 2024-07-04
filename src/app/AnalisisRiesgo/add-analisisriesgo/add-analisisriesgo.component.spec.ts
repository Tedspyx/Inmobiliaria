import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnalisisriesgoComponent } from './add-analisisriesgo.component';

describe('AddAnalisisriesgoComponent', () => {
  let component: AddAnalisisriesgoComponent;
  let fixture: ComponentFixture<AddAnalisisriesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAnalisisriesgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAnalisisriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
