import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../../common/headers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg_errors = false;
  error: string;
  // success: string = 'Registeration successful. Please log in to use the service.';
  errors = [];

  constructor(public router: Router, public http: Http) { }


  register(event, username, email, password) {
    this.errors = []
    event.preventDefault();
    let body = JSON.stringify({ username, email, password });
    this.http.post('https://zuhura-api.herokuapp.com/api/v1.0/auth/register/', body, { headers: contentHeaders })
      .subscribe(
      response => {
        this.router.navigate(['login']);;
      },
      error => {
        this.reg_errors = true;
        this.error = error.json();
        let errorObj = error.json();
        console.log(errorObj)
        if (errorObj.hasOwnProperty('username')) {
          this.errors.push(errorObj.username[0]);
          this.errors.push('Username error: ' + errorObj.username[0]);
        }

        if (errorObj.hasOwnProperty('email')) {
          this.errors.push('Error: Email Address is required');
        }

        if (errorObj.hasOwnProperty('password')) {
          this.errors.push('Error: Password is Required');
        }

        console.log(this.errors)
      }
      );

  }
  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }


  ngOnInit() { }
}
