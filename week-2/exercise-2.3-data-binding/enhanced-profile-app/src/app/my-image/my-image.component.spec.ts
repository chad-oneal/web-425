/*
============================================
, Title: my-image.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: my-image.component.spec.ts
+===========================================
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyImageComponent } from './my-image.component';

// description and declaration of variables
describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
