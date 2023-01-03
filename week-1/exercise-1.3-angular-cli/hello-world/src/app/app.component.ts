/**
 * Title: app.component.ts
 * Author: Chad ONeal
 * Date: 01/03/23
 * Description: app component for the hello-world project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myWorld = `You are now in Chad ONeal's world!!`;
}
