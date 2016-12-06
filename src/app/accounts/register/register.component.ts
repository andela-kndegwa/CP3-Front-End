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

  username_errors = false;

  constructor(public router : Router, public http: Http) { }

  register(event, username, email, password){
      event.preventDefault();
      let body = JSON.stringify({ username, email, password });
      this.http.post('https://zuhura-api.herokuapp.com/api/v1.0/auth/register/', body, { headers: contentHeaders })
      .subscribe(
        response => {
          // localStorage.setItem('', response.json().token);
          this.router.navigate(['login']);
        },
       error => {
          this.username_errors = true;
          console.log(error.text());
        }
      );

  }
      login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }
  

  ngOnInit() { }
 }
