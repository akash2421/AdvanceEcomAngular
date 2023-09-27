import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerProductUpdateComponent } from './seller-product-update/seller-product-update.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "seller-auth",
    component: SellerAuthComponent
  },
  {
    path: "pagenotfound",
    component: PagenotfoundComponent
  },
  {
    component: SearchComponent,
    path: "search/:query"

  },
  {
    component: ProductDetailsComponent,
    path: "details/:productId"

  },
  {
    path: "seller-home",
    component: SellerHomeComponent,
    canActivate: [authGuard]
  },
  {
    path: "seller-add-product",
    component: SellerAddProductComponent,
    canActivate: [authGuard]

  },
  {
    path: "seller-update-product/:id",
    component: SellerProductUpdateComponent,
    canActivate: [authGuard]

  },
  {
    path: "user-auth",
    component: UserAuthComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
