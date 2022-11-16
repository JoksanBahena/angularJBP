import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../types/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  user: UserLogin = {
    email: '',
    password: '',
  };
  
  logoPath: string = "../../../../../assets/img/Logo.png";

  constructor() { }

  ngOnInit(): void {
  }

  signin() {
    console.log(this.user);
  }

}
