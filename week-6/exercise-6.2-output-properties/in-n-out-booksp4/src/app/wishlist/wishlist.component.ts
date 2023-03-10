/*
============================================
, Title: wishlist.component.spec.ts
; Author: Chad ONeal
; Date: 02/08/2023
; Description: wishlist.component.spec.ts
+===========================================
*/

// import statements
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

// tells which css and html files to use
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

// export statement
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }
}
