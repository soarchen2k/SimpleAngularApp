import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleAngularApp';

  // tslint:disable-next-line:typedef
  updateLastAccessed() {
    console.log('Button was clicked on: ' + new Date());
  }
}
