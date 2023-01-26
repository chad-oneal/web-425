/*
============================================
, Title: about.component.spec.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: about.component.spec.ts
+===========================================
*/

// import statement
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

// description and naming of variables
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
