import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  pageRequested = 1;

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onPageChange(page) {
    this.pageRequested = page;

    // 记录 pageRequested 的历史，可以在浏览器的 console 中显示
    console.log(this.pageRequested);
  }
}
