import { Component, OnInit } from '@angular/core';
import { IBucketList } from './bucketlist';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BucketlistsService } from './bucketlists.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


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
    error_b: string;
    b_d : string = '';
    private sub: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _bucketlistService: BucketlistsService,
        public toastr: ToastsManager
    ) {

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
                this.toastr.success('Bucket List Successfully updated!', 'Success!');
            },
            error => {
            this.errorMessage = <any>error;
            let errorObj = error.json();
            this.toastr.error(errorObj[0]);
            if (errorObj.hasOwnProperty('name')){
                this.toastr.error('Bucket list name error: ' + errorObj.name[0]);
            }
            });

    }
    deleteBucketList(b_id): void {
        this._bucketlistService.deleteBucketList(this.bucketlist.id).
            subscribe(bucketlist => {
                this.deletedBucket = bucketlist;
                this._router.navigate(['/bucketlists']);
                this.toastr.success('Bucket List Successfully deleted!', 'Success!');
            },
            error => this.errorMessage = <any>error);
    }
}