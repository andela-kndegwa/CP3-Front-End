import { Component, OnInit } from '@angular/core';
import { BucketlistsService } from './bucketlists.service';
import { IBucketList } from './bucketlist';
import { Item } from './item';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    item: Item[];
    i: Item;
    errorMessage: string;
    bucketlist: IBucketList = new IBucketList;
    currentBucketListId: number;
    newItem: string;
    updatedItem: string;
    // console.log(bucketlist);
    private sub: Subscription;

    constructor(
        private items: BucketlistsService,
        private router: Router,
        private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let b_id = +params['id'];
                this.currentBucketListId = b_id;
                this.getBucketListItems(b_id);
            });
    }
    getBucketListItems(id: number) {
        this.items.getItems(id).subscribe(
            item => this.item = item,
            error => this.errorMessage = <any>error
        );
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
