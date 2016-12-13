import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BucketlistsService } from '../bucketlists/bucketlists.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = localStorage.getItem('currentUser');
  number_bucketlist: string;

  constructor(
    private _router: Router,
    public bucketlistService: BucketlistsService) { }

  ngOnInit() {
    this.number_bucketlist = localStorage.getItem('new_b');
    this.bucketlistService.getBucketListsNumber().
      subscribe(
      bucketlist_no => {
        this.number_bucketlist = bucketlist_no.length.toString()
        console.log(bucketlist_no.length);
      }
      )
    }
  goto() {
    console.log('Here');
    this._router.navigate(['./bucketlists/']);
  }
}
