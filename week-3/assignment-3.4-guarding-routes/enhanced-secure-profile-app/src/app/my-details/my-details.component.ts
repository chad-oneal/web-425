/**
 * Title: my-details.component.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: my-details.component.ts
 */


// import statement
import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#Typescript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string,favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;

  }

  toString() {
    console.log('\n Full name: ${this.FullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}')
  }
}

// tells what css and html to use
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

//export statement
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Chad ONeal", "Mexican", "Red");
    this.myProfile.toString();

   }

  ngOnInit(): void {
  }

}
