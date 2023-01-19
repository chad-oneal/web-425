/**
 * Title: app.component.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: app.component.ts
 */

// import statements
import { TestBed } from '@angular/core/testing';
import { SignInGuard } from './sign-in.guard';

// description & declaration of SignInGuard
describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
