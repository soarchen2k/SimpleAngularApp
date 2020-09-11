import { Injectable, EventEmitter } from '@angular/core';
import {Book} from './Model/Book';
import {Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  books: Array<Book>;


  bookAddedEvent1 = new EventEmitter();
  bookAddedEvent2 = new Subscriber();

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
    this.addBook(book1);

    const book2 = new Book();
    book2.title = 'Second Book';
    book2.author = 'James';
    book2.price = 5.99;
    this.addBook(book2);

    const book3 = new Book();
    book3.title = 'Third Book';
    book3.author = 'Laura';
    book3.price = 8.99;
    this.addBook(book3);
  }

  // tslint:disable-next-line:typedef
  addBook(book: Book) {
    this.books.push(book);
    this.bookAddedEvent1.emit(book);
    this.bookAddedEvent2.next(book);
  }
}
