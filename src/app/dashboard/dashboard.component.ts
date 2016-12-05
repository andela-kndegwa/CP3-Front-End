import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = localStorage.getItem('currentUser');

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goto() {
    console.log('Here');
    this._router.navigate(['./bucketlists/']);
  }

}
