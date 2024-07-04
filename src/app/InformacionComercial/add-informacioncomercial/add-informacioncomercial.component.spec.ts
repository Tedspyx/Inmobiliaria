import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformacioncomercialComponent } from './add-informacioncomercial.component';

describe('AddInformacioncomercialComponent', () => {
  let component: AddInformacioncomercialComponent;
  let fixture: ComponentFixture<AddInformacioncomercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInformacioncomercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInformacioncomercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
