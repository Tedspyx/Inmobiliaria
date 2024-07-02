import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInmueblesComponent } from './add-inmuebles.component';

describe('AddInmueblesComponent', () => {
  let component: AddInmueblesComponent;
  let fixture: ComponentFixture<AddInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInmueblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
