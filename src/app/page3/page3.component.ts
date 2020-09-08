import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['../page1/page1.component.css']
})
export class Page3Component implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  removeLastBook() {
    if (this.dataService.books.length > 0) {
      this.dataService.books.pop();
    }
  }

}
