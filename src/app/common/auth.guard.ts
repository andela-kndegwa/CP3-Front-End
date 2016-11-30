import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  let jwtHelper: JwtHelper;
  constructor(private router: Router) {
      this.jwtHelper = new JwtHelper();
  }

  canActivate() {
      let token  = localStorage.getItem('token');
        console.log(token)

    return this.jwtHelper.isTokenExpired(token)

    // this.router.navigate(['/login']);
    // return false;
  }
}