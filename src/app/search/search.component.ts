import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: undefined | product[]
  notfound: undefined | string;

  constructor(private active: ActivatedRoute, private prod: ProductService) {

  }
  ngOnInit(): void {
    let query = this.active.snapshot.paramMap.get('query');
    console.log(query)
      query && this.prod.searchProduct(query).subscribe((data) => {
        if(data)
        {
        this.searchResult = data
        }
        else{
          this.notfound = "Product Not found"

        }
      })
    
  }
}
