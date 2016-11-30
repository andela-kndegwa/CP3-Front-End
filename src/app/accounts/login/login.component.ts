import { Component, OnInit } from '@angular/core';
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
  constructor(public router:Router, public http: Http) { }

  login(event, username, password){
      let body = JSON.stringify({username, password});
          
     this.http.post('https://zuhura.herokuapp.com/api/v1.0/auth/login/', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('token', response.json().token);
          this.router.navigate(['/bucketlists']);
          console.log(localStorage.getItem('token'));
        },
        error => {
          this.login_errors = true;
          console.log(error.text());
        }
      );
  }
    register(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }

}
