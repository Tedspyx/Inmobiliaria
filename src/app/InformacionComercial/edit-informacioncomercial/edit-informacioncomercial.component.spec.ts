import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformacioncomercialComponent } from './edit-informacioncomercial.component';

describe('EditInformacioncomercialComponent', () => {
  let component: EditInformacioncomercialComponent;
  let fixture: ComponentFixture<EditInformacioncomercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInformacioncomercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInformacioncomercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
