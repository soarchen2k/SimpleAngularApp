import {Component, ViewChild} from '@angular/core';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleAngularApp';

  // 使用 @ViewChild Decorator，连接 footer 中的 #footer 选择器
  // 与 footerComponent 变量
  @ViewChild('footer', {static: true})
  // 定义一个 footerComponent 变量，变量类型为 FooterComponent
  footerComponent: FooterComponent;

  // tslint:disable-next-line:typedef
  updateLastAccessed() {
    console.log('The previous last accessed value was ' + this.footerComponent.lastAccessed);
    // 使用 footerComponent 变量来访问 FooterComponent 中的参数
    this.footerComponent.lastAccessed = new Date().toString();
  }
}
