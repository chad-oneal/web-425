/*
============================================
, Title: home.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: home.component.spec.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//export statement
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
