/**
 * Title: app.component.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: app.component.ts
 */

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css & html files to use
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// export statement
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
