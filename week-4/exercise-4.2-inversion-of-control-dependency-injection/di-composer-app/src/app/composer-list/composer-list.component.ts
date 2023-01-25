/**
 * Title: composer-list.component.ts
 * Author: Chad ONeal
 * Date: 01/17/2023
 * Description: Composer list component; displays a list of composers
 */


// import statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

// tells which html & css files to use
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// export statement
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }

}
