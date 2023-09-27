import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-product-update',
  templateUrl: './seller-product-update.component.html',
  styleUrls: ['./seller-product-update.component.css']
})
export class SellerProductUpdateComponent implements OnInit {
  productData: undefined | product
  productMessage: undefined | string
  constructor(private routes: ActivatedRoute, private prod: ProductService,private rout:Router) { }

  ngOnInit(): void {
    let productId = this.routes.snapshot.paramMap.get('id')
    productId && this.prod.getProduct(productId).subscribe((res) => {

      this.productData = res
    })
  }
  submit(data: product) {
    if(this.productData){
      //we are adding id to the add product 
      data.id = this.productData.id 
    }
    this.prod.updateProduct(data).subscribe((res) => {
      if (res) {
        this.productMessage = "Product Updated Sucessful "
        setTimeout(()=>this.rout.navigate(['seller-home']),4000)
      }
      else {
        setTimeout(() => this.productMessage == undefined), 3000
      }

    })
  }

}
