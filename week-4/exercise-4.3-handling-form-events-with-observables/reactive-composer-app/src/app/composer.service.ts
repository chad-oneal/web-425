/*
============================================
, Title: composer.service.ts
; Author: Chad ONeal
; Date: 01/25/2023
; Description: composer.service.ts for di-composer-app
+===========================================
*/

// import statement
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

// injectable
@Injectable({
  providedIn: 'root'
})

// export statement
export class ComposerService {

  composers: Array<IComposer>


  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Pierre Boulez", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Thomas Tallis", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Erik Satie", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Karlheinz Stockhausen", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Stephen Sondheim", genre: "Classical"
      },

    ]
}

getComposers() {
  return this.composers;
}

getComposer(composerId: number) {
  for (let composer of this.composers) {
    if (composer.composerId === composerId) {
      return composer;
    }
  }
}
}
