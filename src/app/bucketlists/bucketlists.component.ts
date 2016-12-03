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
    bucketlist: IBucketList = new IBucketList;
    currentBucketListId: number;
    newItem: string;
    updatedItem: string;
    // console.log(bucketlist);
    private sub: Subscription;

    constructor(
        private _bucketlistsService: BucketlistsService,
        private router: Router,
        private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let b_id = +params['id'];
                this.getBucketLists(b_id);
            });
    }
    getBucketLists(id: number) {
      this._bucketlistsService.getBucketLists.subscribe(

      )
    }
    createBucketListItem(b_id, name): void {
        this.items.createBucketListItem(this.currentBucketListId, name).
            subscribe(item => {
                this.newItem = item;
                this.item.push(item);
            },
            error => this.errorMessage = <any>error);
    }

}
