import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName = 'Page 1';
  // tslint:disable-next-line:variable-name
  bookWrittenByMatt: number;

  // Angular中依赖注入的工作方式是，我们不是在类级别声明对象，而是在构造函数的参数中声明。
  constructor(private dataService: DataService) {}

  // 依赖注入成功后，可以在 ts 类中创建所需的方法来访问服务
  get bookQuantity(): number {
    return this.dataService.books.length;
  }

  // get bookWrittenByMatt(): number {
  //   return this._bookWrittenByMatt;
  // }

  ngOnInit(): void {

    // ngOnInit 方法中的语句在调用后都立即被执行，延迟5000毫秒仅仅表现为效果5秒钟后出现
    setTimeout(() => {
      this.pageName = 'First Page';
    }, 5000);

    // 两种方法取其一，推荐第二种
    this.bookWrittenByMatt = this.dataService.books.filter(it => it.author === 'Matt').length;

    /**
     * 我们会在这个事件发射器上调用一个方法这个方法叫做subscribe。
     * 这是我们想要接收这些事件的通知的方法。
     */
    this.dataService.bookAddedEvent1.subscribe(

      // 这个方法可以取几个不同的参数，第一个是一个lamda表达式，
      // 它将接收触发事件时接收到的数据，并定义要运行的代码。
      // 第一个参数的结构是一个变量，我们叫它newBook因为这是一个通用的事件发射器。
      // 我们说泛型类型是book对象。
      (newBook) => {
        if (newBook.author === 'Matt') {
          this.bookWrittenByMatt++;
        }
      },
      (error) => {

      }
    );

  }

  // tslint:disable-next-line:typedef
  onButtonClick() {
    alert('Hello, today is: ' + new Date());
  }
}
