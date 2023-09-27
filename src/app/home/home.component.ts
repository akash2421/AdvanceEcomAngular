import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
trendyProduct: undefined | product[]
  constructor(private prod:ProductService)
  {

  }
  ngOnInit(): void {
    this.prod.trendyproduct().subscribe((data)=>{
      this.trendyProduct= data
    })
  }
}
