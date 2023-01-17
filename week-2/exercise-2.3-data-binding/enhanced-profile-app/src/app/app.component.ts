/**
 * Title: app.component.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: app.component.ts
 */


//import statement
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export statement
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}























