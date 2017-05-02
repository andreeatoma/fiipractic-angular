import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : Product[];

  constructor() {
  	 this.products = [
  	 	new Product(
      '1',
      '04/04/2017', 
      ['Garsoniere'],
      '/assets/images/1.jpg',),
  	 	new Product(
      '2',
      '20/04/2017', 
       ['Apartamente 1 camera'],
      '/assets/images/2.jpg'),
  	 	new Product(
      '3',
      '01/05/2017', 
       ['Apartamente 2 camere'],
      '/assets/images/3.jpg'),
      new Product(
      '4',
      '01/05/2017', 
       ['Apartamente 3 camere'],
      '/assets/images/4.jpg'),
      new Product(
      '5',
      '01/05/2017', 
       ['Case'],
      '/assets/images/5.jpg'),
      new Product(
      '6',
      '01/05/2017', 
       ['Case'],
      '/assets/images/5.jpg'),
      new Product(
      '7',
      '01/05/2017', 
       ['Case'],
      '/assets/images/5.jpg'),
      new Product(
      '8',
      '01/05/2017', 
       ['Case'],
      '/assets/images/5.jpg')
     
  	 ];
  	}

  	productWasSelected (product: Product) : void {
      console.log('Product clicked: ', product);
  }
  ngOnInit() {
  }

}
