/*
============================================
, Title: app-routing.module.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: app-routing.module.ts
+===========================================
*/

//import statements
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


//routes for home, about, & contact links within the page
const routes: Routes = [
  { path:'',
    component: HomeComponent
  },

  { path: 'home',
  component: HomeComponent
  },

  { path:'about',
    component: AboutComponent
  },

  { path:'contact',
    component: ContactComponent
  }
];

//router module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
