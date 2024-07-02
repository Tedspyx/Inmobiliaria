import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSucursalesComponent } from './edit-sucursales.component';

describe('EditSucursalesComponent', () => {
  let component: EditSucursalesComponent;
  let fixture: ComponentFixture<EditSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSucursalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
