/*
============================================
, Title: my-image.component.spec.ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: my-image.component.spec.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells component what html and css to use
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})

// export statement
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
