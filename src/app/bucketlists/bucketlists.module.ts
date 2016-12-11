import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BucketlistsComponent } from './bucketlists.component';
import { AuthGuard } from '../common/auth.guard';

import { BucketlistsService } from './bucketlists.service';
import { BucketListDetailGuard } from './bucketlists-guard.service';
import { BucketListDetailComponent } from './bucketlist_detail.component';
import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail.component';
import { BucketlistFilterPipe } from './bucketlist-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : 'bucketlists', component : BucketlistsComponent, canActivate: [AuthGuard]},
      {path: 'bucketlist/:id', component: BucketListDetailComponent, canActivate: [AuthGuard, BucketListDetailGuard]},
      {path: 'bucketlist/:id/items', component: ItemsComponent, canActivate: [AuthGuard]},
      {path: 'bucketlist/:b_id/item/:item_id', component: ItemDetailComponent, canActivate: [AuthGuard]},
    ]),
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [AuthGuard, BucketlistsService, BucketListDetailGuard],
  declarations: [BucketlistsComponent, BucketListDetailComponent, ItemsComponent, ItemDetailComponent, BucketlistFilterPipe]
})
export class BucketlistsModule { }
