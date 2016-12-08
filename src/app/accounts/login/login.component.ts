import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../../common/headers';

const template = require('./login.component.html');

@Component({
  selector: 'app-login',
  templateUrl: template,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login_errors = false;
  error: string;
  errors = [];
  constructor(public router: Router, public http: Http) { }

  login(event, username, password) {
    this.errors = [];
    let body = JSON.stringify({ username, password });
    localStorage.setItem('currentUser', username);
    this.http.post('https://zuhura-api.herokuapp.com/api/v1.0/auth/login/', body, { headers: contentHeaders })
      .subscribe(
      response => {
        localStorage.setItem('token', response.json().token);
        this.router.navigate(['/dashboard']);

      },
      error => {
        this.login_errors = true;
        this.error = error.json();
        let errorObj = error.json();
        if (errorObj.hasOwnProperty('username')) {
          this.errors.push('Username error: ' + errorObj.username[0]);
          console.log('Username error: ' + errorObj.username[0]);
}
        if (errorObj.hasOwnProperty('password')) {
          this.errors.push('Error: Password is Required');
        }
        console.log(this.errors)
      }
      );
  }
  register(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
}
