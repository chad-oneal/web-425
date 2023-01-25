/*
============================================
, Title: composer.service.spec.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: composer.service.spec.ts for di-composer-app
+===========================================
*/

// import statements
import { TestBed } from '@angular/core/testing';
import { ComposerService } from './composer.service';

// description and declaration of ComposerService
describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
