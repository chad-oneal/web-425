/*
============================================
, Title: app.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: app.component.spec.ts
+===========================================
*/

// import statement
import { Component } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export statement
export class AppComponent {
  title = 'my-app';
}
