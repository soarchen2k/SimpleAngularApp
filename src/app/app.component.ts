import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {Page2Component} from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 实现 OnInit 接口
export class AppComponent implements OnInit {
  title = 'SimpleAngularApp';

  // 使用 @ViewChild Decorator，连接 footer 中的 #footer 选择器
  // 与 footerComponent 变量
  @ViewChild('footer', {static: true})
    // 定义一个 footerComponent 变量，变量类型为 FooterComponent
  footerComponent: FooterComponent;

  @ViewChild('page2', {static: true})
  page2Component: Page2Component;

  // 声明一个 string 类型的变量，在 TypeScript 中，用小写的 string 来声明字符串变量
  startTime: string;

  // tslint:disable-next-line:typedef
  updateLastAccessed() {
    console.log('The previous last accessed value was ' + this.footerComponent.lastAccessed);
    // 使用 footerComponent 变量来访问 FooterComponent 中的参数
    this.footerComponent.lastAccessed = new Date().toString();
  }

  // 当 component 启动时，初始化一个 startTime 字符串
  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  // 在 header app组件中有创建本地事件，incrementHitCounter
  // 我们希望 onPageChangedEvent调用我们的本地incrementHitCounter方法，
  // 在我们的本地 incrementHitCounter 方法中，我们希望调用Page2组件上的 incrementHitCounter方法。
  // tslint:disable-next-line:typedef
  incrementHitCounter(page) {
    if (page === 2) {
      this.page2Component.incrementHitCounter();
    }
  }
}
