import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName = 'Page 1';

  // Angular中依赖注入的工作方式是，我们不是在类级别声明对象，而是在构造函数的参数中声明。
  constructor(private dataService: DataService) {}

  // 依赖注入成功后，可以在 ts 类中创建所需的方法来访问服务
  get bookQuantity(): number {
    return this.dataService.books.length;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageName = 'First Page';
    }, 5000);
  }

  // tslint:disable-next-line:typedef
  onButtonClick() {
    alert('Hello, today is: ' + new Date());
  }
}
