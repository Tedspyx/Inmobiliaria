import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSucursalesComponent } from './add-sucursales.component';

describe('AddSucursalesComponent', () => {
  let component: AddSucursalesComponent;
  let fixture: ComponentFixture<AddSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSucursalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
