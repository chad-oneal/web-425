/*
============================================
, Title: about.component.spec.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: about.component.spec.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells what css & html files to use
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

// export statement
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
