import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { BucketlistsService } from './bucketlists.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { IBucketList } from './bucketlist';

@Component({
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css', '../dashboard/dashboard.component.css']


})
export class ItemDetailComponent implements OnInit {
    item: Item = new Item;
    errorMessage: string;
    updatedBucketItem: string;
    deletedBucketItem: string;
    parentBucketlist: IBucketList;
    pb: string;
    public sub: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _bucketlistService: BucketlistsService,
        public toastr: ToastsManager
    ) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                var b_id = +params['b_id'];
                let item_id = +params['item_id'];
                this.getBucketListItem(b_id, item_id);
                this.getParentBucketList(b_id);
                console.log(b_id);
            });

    }

    getBucketListItem(b_id: number, item_id: number) {
        this._bucketlistService.getBucketListItem(b_id, item_id).subscribe(
            item => this.item = item,
            error => this.errorMessage = <any>error);

    }
    updateBucketListItem(b_id: number, item_id: number, name: string, is_done: boolean): void {
        this._bucketlistService.updateBucketListItem(this.item.bucketlist, this.item.id, this.item.name, this.item.is_done).
            subscribe(item => {
                this.updatedBucketItem = item;
                this.toastr.success('Item Successfully updated!', 'Success!');
            },
            error => 
            {
                this.errorMessage = <any>error;
                let errorObj = error.json();
                this.toastr.error(errorObj[0]);
                if (errorObj.hasOwnProperty('name')){
                    this.toastr.error('Item name error'+ errorObj.name[0]);
                }
            });

    }
    deleteBucketListItem(b_id: number, item_id: number): void {
        this._bucketlistService.deleteBucketListItem(this.item.bucketlist, this.item.id).
            subscribe(item => {
                this.updatedBucketItem = item;
                this._router.navigate(['/bucketlists']);
            },
            error => this.errorMessage = <any>error);

    }

    getParentBucketList(b_id: number): void {
        this._bucketlistService.getBucketList(b_id).
            subscribe(
            parentId => {
                this.parentBucketlist = parentId;
                this.pb = this.parentBucketlist.name;
            }
            )
    }

}