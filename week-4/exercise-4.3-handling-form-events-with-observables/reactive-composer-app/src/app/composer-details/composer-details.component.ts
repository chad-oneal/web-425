/*
; Title: Assignment 3.2 Passing Data to Routes, part 1
; Author: Chad ONeal
; Date: 01/17/2023
; Description: composer-details.component.spec.ts for enhanced-composer-app
*/

// import statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

// tells which css & html files to use
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

// export statement
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
