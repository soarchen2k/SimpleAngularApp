import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from './footer/footer.component';

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
}
