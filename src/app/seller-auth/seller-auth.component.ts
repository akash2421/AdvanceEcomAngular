import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) {

  }
  authError:string = ''
  showLogin = false
  ngOnInit(): void {
    this.seller.reloadSeller()
  }


  signUp(data: SignUp): void {
    this.seller.userSignUp(data)
  }
  LogIn(data: SignUp) {
    this.authError=""
    this.seller.UserLogin(data);
    this.seller.isLoginFailed.subscribe((error) => {
      if (error) {
        this.authError = "Email and password is incorrect"
      }
    })

  }
  openLogin() {
    this.showLogin = true
  
  }
  openSign() {
    this.showLogin = false

  }
}
