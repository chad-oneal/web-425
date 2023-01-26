/*
============================================
, Title: app-routing.module.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: App routing module
+===========================================
*/

// import statements
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if statement
if (environment.production) {
  enableProdMode();
}

// dynamic content
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
