/*
============================================
, Title: my-details.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: my-details.component.spec.ts
+===========================================
*/

//import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDetailsComponent } from './my-details.component';

// description and declaration of variables
describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
