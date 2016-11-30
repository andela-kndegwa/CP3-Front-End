import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BucketlistsComponent } from './bucketlists.component';
import { AuthGuard } from '../common/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path : 'bucketlists', component : BucketlistsComponent , canActivate : [AuthGuard]},
         ])
  ],
  providers : [AuthGuard],
  declarations: [BucketlistsComponent]
})
export class BucketlistsModule { }
