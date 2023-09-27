import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: product[] = []
  productMessage: undefined | string
  constructor(private prod: ProductService) { }
  ngOnInit(): void {
    this.getAllproduct();
  }

  getAllproduct() {
    debugger
    this.prod.getproductList().subscribe((res: any) => {
      debugger
      this.productList = res.body
    })
  }
  onDelete(id: number) {
    this.prod.deleteProduct(id).subscribe((res: any) => {
      if (res) {
        this.productMessage = "Product Deleted"
        this.getAllproduct()
      }
    })
  }
  onEdit(id:number){

  }



}
