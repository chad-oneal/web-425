/*
============================================
, Title: home.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: home.component.spec.ts
+===========================================
*/

// import statement
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

// variable description and declaration
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
