import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-date',
  template: `<div class="app-product-date">{{ date }}</div>`,
  styleUrls: ['./product-date.component.css']
})
export class ProductDateComponent implements OnInit {
	@Input() date: string;
  constructor() { }

  ngOnInit() {
  }

}
