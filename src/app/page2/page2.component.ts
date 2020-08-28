import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['../page1/page1.component.css']
})
export class Page2Component implements OnInit {

  // 创建一个变量 hits 来记录被点击的次数
  hits = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // 增量点击计数器
  // tslint:disable-next-line:typedef
  incrementHitCounter() {
    this.hits++;
  }

}
