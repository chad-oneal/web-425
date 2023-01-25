/*
; Title: Assignment 3.2 Passing Data to Routes, part 1
; Author: Chad ONeal
; Date: 01/17/2023
; Description: composer-details.component.spec.ts for enhanced-composer-app
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComposerDetailsComponent } from './composer-details.component';

// description and testbed configurations
describe('ComposerDetailsComponent', () => {
  let component: ComposerDetailsComponent;
  let fixture: ComponentFixture<ComposerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
