import { Component, OnInit, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import {AuthService } from './accounts/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = ' Zuhura';
  url: string;
  constructor(private auth: AuthService, private router:Router, private _routes: ActivatedRoute,
  public toastr: ToastsManager, vRef:ViewContainerRef  ){
    this.toastr.setRootViewContainerRef(vRef);
  }


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