import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  pageRequested = 1;

  ngOnInit(): void {
  }

  onPageChange(page) {
    this.pageRequested = page;
  }

}
