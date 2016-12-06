import { Component, OnInit } from '@angular/core';
import { IBucketList } from './bucketlist';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { BucketlistsService } from './bucketlists.service';

@Component({
    templateUrl: './bucketlist-detail.component.html',
    styleUrls: ['./bucketlist-detail.component.css', '../dashboard/dashboard.component.css']
})

export class BucketListDetailComponent implements OnInit {
    pageTitle: string = ' Bucket List Detail';
    bucketlist: IBucketList = new IBucketList;
    errorMessage: string;
    updatedBucket: string;
    deletedBucket: string;
    private sub: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _bucketlistService: BucketlistsService) {

    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getBucketList(id);
            });
    }

    getBucketList(id: number) {
        this._bucketlistService.getBucketList(id).subscribe(
            bucketlist => this.bucketlist = bucketlist,
            error => this.errorMessage = <any>error);
    }
    onBack(): void {
        this._router.navigate(['/bucketlists']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Bucketlist Detail: ' + message;
    }
    updateBucketList(b_id): void {
        this._bucketlistService.updateBucketList(this.bucketlist.id, this.bucketlist.name).
            subscribe(bucketlist => {
                this.updatedBucket = bucketlist;
            },
            error => this.errorMessage = <any>error);

    }
    deleteBucketList(b_id): void {
        this._bucketlistService.deleteBucketList(this.bucketlist.id).
            subscribe(bucketlist => {
                this.deletedBucket = bucketlist;
                this._router.navigate(['/bucketlists']);
            },
            error => this.errorMessage = <any>error);
    }
}