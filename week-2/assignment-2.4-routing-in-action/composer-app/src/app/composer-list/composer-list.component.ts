/**
 * Title: composer-list.component.ts
 * Author: Chad ONeal
 * Date: 01/11/2023
 * Description: Composer list component; displays a list of composers
 */

// import statement
import { Component, OnInit } from '@angular/core';

// export statement
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

// tells which css & html files to use
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// export statement
export class ComposerListComponent implements OnInit {

  // composers array that returns a list of composers
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Pierre Boulez", "Classical"),
      new Composer("Thomas Tallis", "Classical"),
      new Composer("Erik Satie", "Classical"),
      new Composer("Karlheinz Stockhausen", "Classical"),
      new Composer("Stephen Sondheim", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
