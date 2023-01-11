/*
============================================
, Title: about.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: about.component.spec.ts
+===========================================
*/


// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

//declaration of variables
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
