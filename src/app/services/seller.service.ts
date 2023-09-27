import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LogIn, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginFailed = new EventEmitter<boolean>(false)


  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    return this.http.post('http://localhost:3000/seller', data,
      { observe: 'response' }).subscribe((res) => {
        this.isSellerLoggedIn.next(true)
        localStorage.setItem('seller', JSON.stringify(res.body))
        this.router.navigate(['seller-home'])
        // console.log(res)
      })
    // return false
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])


    }
  }

  UserLogin(data: LogIn) {
    console.log("login service is working" + data)

    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((res: any) => {
        if (res && res.body && res.body.length) {
          console.log("userLogged In")
          localStorage.setItem('seller', JSON.stringify(res.body))
          this.router.navigate(['seller-home'])
        } else {
          this.isLoginFailed.emit(true)
        }

      })


  }

}
