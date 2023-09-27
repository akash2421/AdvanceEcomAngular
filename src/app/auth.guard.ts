import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { SellerService } from './services/seller.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(SellerService)
  const router = inject(Router)
  if (localStorage.getItem('seller')) {
 return true
}

  return service.isSellerLoggedIn
  
};

