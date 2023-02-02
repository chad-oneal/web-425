/*
============================================
, Title: book-list.component.spec.ts
; Author: Chad ONeal
; Date: 02/02/2023
; Description: book-list.component.spec.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// export statement
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
