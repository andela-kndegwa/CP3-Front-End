import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';


@Injectable()
export class BucketListDetailGuard implements CanActivate {
  constructor(private _router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    let id = +route.url[1].path;
    // console.log(route);
    if (isNaN(id) || id < 1) {
      alert('Invalid Bucket list id');
      this._router.navigate(['/bucketlists'])
      return false;

    };
    return true;
  }
}
