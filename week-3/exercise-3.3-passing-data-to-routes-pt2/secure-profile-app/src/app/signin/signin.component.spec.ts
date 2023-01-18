/*
============================================
, Title: signin.component.css
; Author: Chad ONeal
; Date: 01/18/2023
; Description: signin.component.css
===========================================
*/

// import statement
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';

// description and declaration of variables
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
