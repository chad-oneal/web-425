/*
============================================
, Title: app.routing.ts
; Author: Chad ONeal
; Date: 01/18/2023
; Description: app.routing.ts for secure-profile-app
+===========================================
*/

// import statements
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';

// export statement
export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [SignInGuard]
    }
]

