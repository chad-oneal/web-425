/*
============================================
, Title: about.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: about.component.spec.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// export statement
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
