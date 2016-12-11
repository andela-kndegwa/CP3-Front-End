import { Component, OnInit } from '@angular/core';
import { BucketlistsService } from './bucketlists.service';
import { IBucketList } from './bucketlist';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';



@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css', '../dashboard/dashboard.component.css']
})

export class BucketlistsComponent implements OnInit {
  errorMessage: string;
  error_b : string;
  bucketlists: IBucketList[];
  newBucket: string;
  bucketlist_error = false;
  listFilter: string;
  username: string = localStorage.getItem('currentUser');

  constructor(private _bucketlists: BucketlistsService
  , public toastr: ToastsManager) { }

  ngOnInit(): void {
    this._bucketlists.getBucketLists().
      subscribe(bucketlists => this.bucketlists = bucketlists,
      error => this.errorMessage = <any>error);
  }
  createBucketList(name): void {
    this._bucketlists.createBucketList(name).
      subscribe(
        bucketlist => {
        this.newBucket = bucketlist;
        this.bucketlists.push(bucketlist);
        this.toastr.success('Bucket List Successfully created!', 'Success!');
      },
      error => {
        this.errorMessage = <any>error;
        this.error_b = error.json().name[0];
        this.toastr.error('Bucket list name error: '  + this.error_b);
      });

  }
}
