import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //seller has different menu 
  menuType: string = "default";
  sellerName: string = '';
  userName: string = '';

  searchResult: undefined | product[];

  constructor(private router: Router, private prod: ProductService) {
  }
  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem('seller') && res.url.includes('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
            this.menuType = "seller";

          }
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = "user";
          console.log("user area")

        }
        else {
          this.menuType = "default";

        
      }
    });
  }
  sellerLogout() {
    console.log("logout");
    localStorage.removeItem('seller');
    this.router.navigate(['']);
  }

  userLogout()
  {
    console.log("logout");
    localStorage.removeItem('user');
    this.router.navigate(['user-auth']);
  }
  searchproduct(query: KeyboardEvent) {
    if (query) {
      const ele = query.target as HTMLInputElement;
      this.prod.searchProduct(ele.value).subscribe((result) => {
        this.searchResult = result;
      });
    }
  }
  searhText() {
    this.searchResult = undefined
  }

  searchBtn(val: string) {
    console.log(val)
    debugger
    this.router.navigate([`search/${val}`])
  }

  redirectToDetails(id: number) {
    this.router.navigate(['/details/' + id]);

  }
}
