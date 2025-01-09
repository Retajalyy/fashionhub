import { Component, OnInit } from '@angular/core';
import {ProductService}  from '../services/product.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  constructor(private _productS:ProductService){}
  products!:any[]; 
  imageURL =''
    ngOnInit(): void {
     this.imageURL = this._productS.uploadURL
     this._productS.getProducts().subscribe(data=>{
      console.log(data)
      this.products = data;
     })

}
}