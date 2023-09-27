import { Component, OnInit } from '@angular/core';
import { LogIn, SignUp } from '../data-type';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true
  authError: string = ""

  constructor(private user: UserService, private form: FormBuilder) {

  }

  ngOnInit(): void {
    this.user.userAuthReload();
  }


  signUp(data: SignUp) {
    this.user.userSignUp(data)
  }
  openLogin() {
    this.showLogin = true

  }
  openSignUp() {
    this.showLogin = false

  }
  LogIn(data: LogIn) {
    console.log("error")
    this.user.userLogin(data);
    this.user.isValidUserAuth.subscribe((res) => {
      if (res) {
        this.authError = "please enter valid user details"
      }
    })
  }

}
