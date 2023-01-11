/*
============================================
, Title: contact.component..ts
; Author: Chad ONeal
; Date: 09 January 2023
; Description: contact.component.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html to use
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
