import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData:undefined|product
  productQuantity:number=1

  constructor(private actice: ActivatedRoute, private prod: ProductService) {

  }

  ngOnInit(): void {

    let proId = this.actice.snapshot.paramMap.get('productId')
    console.log(proId)
    proId && this.prod.getProduct(proId).subscribe((result)=>{
      console.log(result)
      this.productData= result
    })
  }

  inc(val:string)
  {
    if(this.productQuantity<20 && val == 'plus' )
    this.productQuantity += 1
  }
  dec(val:string)
  {
    if(this.productQuantity> 1 && val == 'min' )
    this.productQuantity -= 1
  }
}
