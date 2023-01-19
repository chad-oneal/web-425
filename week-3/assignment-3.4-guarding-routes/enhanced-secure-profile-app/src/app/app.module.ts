/*
============================================
, Title: app.module.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: app.module.ts
+===========================================
*/

// import statement
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';


// module declarations
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    HomeComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// export statement
export class AppModule { }
