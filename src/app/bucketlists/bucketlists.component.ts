import { Component, OnInit } from '@angular/core';
import { BucketlistsService } from './bucketlists.service';
import { IBucketList } from './bucketlist';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})

export class BucketlistsComponent implements OnInit {
  errorMessage: string;
  bucketlists: IBucketList[];
  newBucket: string;

  constructor(private _bucketlists: BucketlistsService) { }

  ngOnInit(): void {
    this._bucketlists.getBucketLists().
      subscribe(bucketlists => this.bucketlists = bucketlists,
      error => this.errorMessage = <any>error);
  }
  createBucketList(name): void {
    this._bucketlists.createBucketList(name).
      subscribe(bucketlist => {
        this.newBucket = bucketlist;
        this.bucketlists.push(bucketlist);
      },
      error => this.errorMessage = <any>error);

  }
}
