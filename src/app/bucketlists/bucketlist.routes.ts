import { Router, Routes } from '@angular/router';
import {BucketlistsComponent} from './bucketlists.component';
import {BucketListDetailComponent} from './bucketlist_detail.component';
import {ItemsComponent} from './items.component';
import {ItemDetailComponent} from './item-detail.component';

import {AuthGuard} from '../common/auth.guard';
import {BucketlistsService} from './bucketlists.service';
import {BucketListDetailGuard} from './bucketlists-guard.service';


export const routes: Routes = [
     {path : 'bucketlists', component : BucketlistsComponent, canActivate: [AuthGuard]},
      {path: 'bucketlist/:id', component: BucketListDetailComponent, canActivate: [AuthGuard, BucketListDetailGuard]},
      {path: 'bucketlist/:id/items', component: ItemsComponent, canActivate: [AuthGuard]},
      {path: 'bucketlist/:b_id/item/:item_id', component: ItemDetailComponent, canActivate: [AuthGuard]},
];

