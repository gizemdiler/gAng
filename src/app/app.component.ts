import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'gAng';
  user: string = 'me';
  product1: any = {
    productId: 1,
    productName: 'sth1',
    categoryId: 1,
    unitPrice: 5
  };
  product2: any = {
    productId: 2,
    productName: 'sth2',
    categoryId: 1,
    unitPrice: 5
  };
  product3: any = {
    productId: 3,
    productName: 'sth3',
    categoryId: 1,
    unitPrice: 5
  };
  product4: any = {
    productId: 4,
    productName: 'sth4', 
    categoryId: 1, 
    unitPrice: 5
  };
  product5: any = { 
    productId: 5, 
    productName: 'sth5', 
    categoryId: 1, 
    unitPrice: 5 
  };
  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5
  ];
}
