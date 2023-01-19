/*
============================================
, Title: signin.component.css
; Author: Chad ONeal
; Date: 01/18/2023
; Description: signin.component.css
===========================================
*/

// import statements
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// tells which css and html files to use
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

// export statement
export class SigninComponent implements OnInit {

  isLoggedIn =false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
