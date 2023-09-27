import { EventEmitter, Injectable } from '@angular/core';
import { LogIn, SignUp, product } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isValidUserAuth = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }


  userSignUp(user: SignUp) {
    this.http.post('http://localhost:3000/user', user, { observe: 'response' }).subscribe((result) => {
      console.log(result)
      if (result)
        //i got the data in rsult now store in local storage
        localStorage.setItem('user', JSON.stringify(result.body))
      this.router.navigate([''])

    })
  }
  // this for if user login he should not go to login again 
  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.router.navigate([''])
    }
  }

  userLogin(user: LogIn) {
    console.log(user)
    this.http.get<SignUp[]>(`http://localhost:3000/user?email=${user.email}&password=${user.password}`, { observe: 'response' }).subscribe((result) => {
      if (result && result.body && result.body?.length) {
        this.isValidUserAuth.emit(false)

        localStorage.setItem('user', JSON.stringify(result.body[0]))
        this.router.navigate([''])
      }
      else {
        this.isValidUserAuth.emit(true)
      }
    })
  }



}
