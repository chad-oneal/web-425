/*
============================================
, Title: composer.service.ts
; Author: Chad ONeal
; Date: 01/25/2023
; Description: composer.service.ts for di-composer-app
+===========================================
*/

// import statements
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// injectable
@Injectable({
  providedIn: 'root'
})

// export statements
export class ComposerService {

  // composers array
  composers: Array<IComposer>;

  // constructor
  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Pierre Boulez", genre: "Classical"},
      {composerId: 101, fullName: "Thomas Tallis", genre: "Classical"},
      {composerId: 102, fullName: "Erik Satie", genre: "Classical"},
      {composerId: 103, fullName: "Karlheinz Stockhausen", genre: "Classical"},
      {composerId: 104, fullName: "Stephen Sondheim", genre: "Classical"}
    ]
  }

  // get composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  // get composers by ID
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  // filter by composers by name (case sensitive)
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
      composers.filter((composer) =>
        composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1)
        )
      );
  }

}
