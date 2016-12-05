import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {AuthService } from './accounts/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = ' Zuhura';
  url: string;
  constructor(private auth: AuthService, private router:Router, private _routes: ActivatedRoute ){}


  ngOnInit() {
    this._routes.url.subscribe(val => {

      this.url = window.location.pathname;
      console.log('VALA', this.url);
    });
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }
  logOut(){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);

  }
}
