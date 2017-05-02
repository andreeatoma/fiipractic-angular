import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

/**
 * @product: componenta pentru view-ul unui singur produs
 */
export class ProductComponent implements OnInit {

	@Input() product:Product;
	@HostBinding('attr.class') cssClass = 'item';
	
  constructor() { }

  ngOnInit() {
  }

}
