import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../data-type';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) { }

  addProduct(data: product) {
   return  this.http.post('http://localhost:3000/products', data)

  }

  getproductList()
  {
    debugger
    return this.http.get<product>('http://localhost:3000/products',{observe:'response'})
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct(id:string)
  {
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)
  }

  trendyproduct()
  {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8')
  }
  searchProduct(query:string)
  {
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)

  }

}
