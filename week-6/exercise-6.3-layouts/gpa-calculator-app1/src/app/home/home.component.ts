/*
============================================
; Title: home.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: for gpa-calculator-app
============================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// export statement
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
