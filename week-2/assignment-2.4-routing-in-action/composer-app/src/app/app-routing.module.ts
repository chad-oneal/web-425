/*
============================================
, Title: app-routing.module.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: App routing module
+===========================================
*/

// import statements
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerListComponent } from './composer-list/composer-list.component';

//routes for home, about, & contact links within the page
const routes: Routes = [
  { path: '', component: ComposerListComponent },
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

//router module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
