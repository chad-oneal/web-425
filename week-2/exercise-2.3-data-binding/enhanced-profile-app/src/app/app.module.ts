/*
============================================
, Title: app.module.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: app.module.ts
+===========================================
*/

// imprt statement
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

// module declarations
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// export statement
export class AppModule { }
