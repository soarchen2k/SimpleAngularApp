import { Injectable } from '@angular/core';
import {Book} from './Model/Book';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  books: Array<Book>;

  constructor() {
    this.makeBooks();
  }

  // tslint:disable-next-line:typedef
  makeBooks() {
    this.books = new Array<Book>();

    const book1 = new Book();
    book1.title = 'First Book';
    book1.author = 'Matt';
    book1.price = 3.99;
    this.books.push(book1);

    const book2 = new Book();
    book1.title = 'Second Book';
    book1.author = 'James';
    book1.price = 5.99;
    this.books.push(book2);

    const book3 = new Book();
    book1.title = 'Third Book';
    book1.author = 'Laura';
    book1.price = 8.99;
    this.books.push(book3);
  }
}
