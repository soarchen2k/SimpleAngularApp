import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  pageRequested = 1;

  // 创建一个 EventEmitter() 对象，要从子对象的父对象绑定HTML属性，我们使用@Input decorator，
  // 就像@Input一样，如果愿意，我们可以选择给它一个单独的名称，如 @Output('onPageChange')。
  // 我们使用@Input允许父对象在HTML中设置子属性。@输入意味着这个属性将被外部设置。
  // @Output说这将发出一个事件。它将在这个特定的组件之外发送数据，而某个东西（可能是父组件）
  // 将监听该输出事件。
  @Output()
  pageChangeEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onPageChange(page) {
    this.pageRequested = page;

    // 记录 pageRequested 的历史，可以在浏览器的 console 中显示
    console.log(this.pageRequested);

    // 点页事件，调用emit方法来实际说明事件已经发生
    this.pageChangeEvent.emit(page);
  }
}
