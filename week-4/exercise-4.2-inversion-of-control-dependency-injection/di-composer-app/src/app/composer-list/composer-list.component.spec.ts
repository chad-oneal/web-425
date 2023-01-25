/*
============================================
, Title: about.component.spec.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: about.component.spec.ts
+===========================================
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComposerListComponent } from './composer-list.component';

// description and declaration of variables
describe('ComposerListComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
