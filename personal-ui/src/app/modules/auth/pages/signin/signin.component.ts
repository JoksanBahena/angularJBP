import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../types/user';
import { AuthService } from '../../service/auth.service';

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

  get isLoading() {
    return this.authService.isLoading;
  }

  constructor(private authService: AuthService, private router: Router) {
    if(!!localStorage.getItem('token')) {
      this.router.navigateByUrl('/');
    }
   }

  ngOnInit(): void {
  }

  signin() {
    this.authService.login(this.user);
  }

}
