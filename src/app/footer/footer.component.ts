import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Book} from '../Model/Book';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @Input() decorator 无需任何参数，
  // 但如果需要声明不同的变量名，则可以使用如 @Input('lastAc') 的格式，
  // 并在需要引用这个变量的地方使用相同的名称
  @Input()
  lastAccessed = '';

  constructor(private dataService: DataService) {  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addBook() {
    const book = new Book();
    book.title = 'Last Day';
    book.author = 'Matt';
    book.price = 9.89;
    this.dataService.books.push(book);
  }
}
