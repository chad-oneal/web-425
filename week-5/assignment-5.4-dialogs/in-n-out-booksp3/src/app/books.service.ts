/*
============================================
, Title: book.service.ts
; Author: Chad ONeal
; Date: 02/02/2023
; Description: book.service.ts for in-n-out-books
+===========================================
*/

// import statement
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


// injectable
@Injectable({
  providedIn: 'root'
})

// export statement
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780147509079',
        title: 'Alice in Wonderland',
        description: 'The story centres on Alice, a young girl who falls asleep in a meadow and dreams that she follows the White Rabbit down a rabbit hole. She has many wondrous, often bizarre adventures with thoroughly illogical and very strange creatures, often changing size unexpectedly (she grows as tall as a house and shrinks to as short as 3 inches tall).',
        numOfPages: 200,
        authors: ['Lewis Carroll']
      },
      {
        isbn: '9780307768735',
        title: 'A Christmas Story',
        description: "This book is all about Ralphie’s unstoppable campaign to get Santa—or anyone else—to give him a Red Ryder carbine action 200-shot range model air rifle. Who cares that the whole adult world is telling him, “You’ll shoot your eye out, kid”?",
        numOfPages: 144,
        authors: ['Jean Shepherd']
      },
      {
        isbn: '978-250268129',
        title: 'The Panic Years',
        description: "Raw, hilarious and beguilingly honest, Nell Frizzell's account of her panic years is both an arm around the shoulder and a campaign to start a conversation. This affects us all - women, men, mothers, children, partners, friends, colleagues - so it's time we started talking about it with a little more candour.",
        numOfPages: 272,
        authors: ['Nell Frizzell']
      },
      {
        isbn: '9781681774664',
        title: 'Rosemarys Baby',
        description: "Suppose that only after you became pregnant did you begin to suspect the building harbored a diabolically evil group of devil worshippers who had mastered the arts of black magic and witchcraft. Suppose that this satanic conspiracy set out to claim not only your husband but your baby. Well, that's what happened to Rosemary... Or did it...?",
        numOfPages: 308,
        authors: ['Ira Levin']
      },
      {
        isbn: '9780141439518',
        title: 'Pride and Prejudice',
        description: "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
        numOfPages: 279,
        authors: ['Jane Austen']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}

