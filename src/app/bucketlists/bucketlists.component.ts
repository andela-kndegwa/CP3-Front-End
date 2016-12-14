import { Component, OnInit } from '@angular/core';
import { BucketlistsService } from './bucketlists.service';
import { IBucketList } from './bucketlist';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/do';



@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css', '../dashboard/dashboard.component.css']
})

export class BucketlistsComponent implements OnInit {
  errorMessage: string;
  error_b: string;
  bucketlists: IBucketList[];
  newBucket: string;
  bucketlist_error = false;
  listFilter: string;
  username: string = localStorage.getItem('currentUser');
  b_no: string;


  constructor(private _bucketlists: BucketlistsService
    , public toastr: ToastsManager) { }

  ngOnInit(): void {
    this._bucketlists.getBucketLists().
      subscribe(
      bucketlists => this.bucketlists = bucketlists,
      error => this.errorMessage = <any>error);
    this._bucketlists.getBucketListsNumber().
      subscribe(
      bucket_number => this.bucketlists.length
      )
  }
  createBucketList(name): void {
    this._bucketlists.createBucketList(name).
      subscribe(
      bucketlist => {
        this.newBucket = bucketlist;
        this.bucketlists.push(bucketlist);
        this.b_no = this.bucketlists.length.toString();
        console.log(this.b_no);
        localStorage.setItem('new_b', this.b_no);
        this.toastr.success('Bucket List Successfully created!', 'Success!');
      },
      error => {
        this.errorMessage = <any>error;
        let errorObj = error.json()
        this.toastr.error(errorObj[0])
        if (errorObj.hasOwnProperty('name')) {
          this.toastr.error('Bucket list name error: ' + errorObj.name[0]);
        }

      });

  }
}
