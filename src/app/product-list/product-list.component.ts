import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ProductListComponent  {
  products = products;
  @Input() name: string;
}