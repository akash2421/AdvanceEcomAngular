import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductmessage: string = ''
  constructor(private prod: ProductService) {

  }

  ngOnInit(): void {

  }

  submit(data: product) {
    this.prod.addProduct(data).subscribe((res: any) => {
      if (res) {
        this.addProductmessage = "Product Added Sucessful "
      }
      else{
        setTimeout(()=> this.addProductmessage == undefined),3000
      }

    })
  }
}
