/*
============================================
, Title: app-routing.module.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: App routing module
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
  title = 'Assignment 4.4 - Async Pipe';
}
