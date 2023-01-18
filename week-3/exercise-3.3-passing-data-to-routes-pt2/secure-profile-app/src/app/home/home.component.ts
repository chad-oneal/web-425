/**
 * Title: app.component.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: app.component.ts
 */


// import statements
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// tells which css & html to use
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// export statement
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
