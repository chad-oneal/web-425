/**
 * Title: app.component.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: app.component.ts
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
