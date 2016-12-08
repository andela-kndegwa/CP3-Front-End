import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IBucketList } from './bucketlist';
import { Item } from './item';

@Injectable()
export class BucketlistsService {
  // property of private nature
  private _bucketlistUrl = 'https://zuhura-api.herokuapp.com/api/v1.0/bucketlists/';
  constructor(private http: Http) { }

  // Get all bucket lists associated with this user
  getBucketLists(): Observable<IBucketList[]> {
    // provide the authentication token here.
    return this.http.get(this._bucketlistUrl, { headers: this.addHeaders() })
      .map((response: Response) => <IBucketList[]>response.json())
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  //
  getBucketList(id: number): Observable<IBucketList> {
    return this.getBucketLists()
      .map((bucketlists: IBucketList[]) => bucketlists.find(b => b.id === id));
  }
  // Api call to create a bucket list
  createBucketList(name: string) {
    let body = JSON.stringify({ name });
    // contentHeaders.append('Authorization', 'JWT ' + localStorage.getItem('token'))
    return this.http.post(this._bucketlistUrl, body, { headers: this.addHeaders() })
      .map(res => res.json())
      .catch(this.handleError);
  }
  // Api call to update a bucket list
  updateBucketList(b_id: number, name: string): Observable<any> {
    return this.http.put(this._bucketlistUrl + b_id + '/', JSON.stringify({ 'name': name }), {
      headers: this.addHeaders()
    })
      .map(res => res.json());
  }
  // method to handle errors if any
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error || 'Server Error');
  }

  deleteBucketList(b_id: number) {
    return this.http.delete(this._bucketlistUrl + b_id + '/', { headers: this.addHeaders() }
    )
      .map(res => res.json());
  }

  getItems(b_id: number): Observable<Item[]> {
    return this.http.get(this._bucketlistUrl + b_id + '/items/', { headers: this.addHeaders() })
      .map((response: Response) => response.json())
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  // Api call to get a bucket list item

  getBucketListItem(b_id: number, i_id: number) {
    return this.http.get(this._bucketlistUrl + b_id + '/items/' + i_id + '/', { headers: this.addHeaders() })
      .map((response: Response) => response.json())
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  // Api call to create a bucket list item
  createBucketListItem(b_id: number, name: string) {
    let body = JSON.stringify({ name });
    return this.http.post(this._bucketlistUrl + b_id + '/items/', body, { headers: this.addHeaders() })
      .map(res => res.json())
      .catch(this.handleError);
  }
  // Api call to update a bucket list item
  updateBucketListItem(b_id: number, i_id: number, name: string, is_done: boolean): Observable<any> {
    return this.http.put(this._bucketlistUrl + b_id + '/items/' + i_id + '/', JSON.stringify({ 'name': name, 'is_done': is_done }), {
      headers: this.addHeaders()
    })
      .map(res => res.json());
  }

  deleteBucketListItem(b_id: number, i_id : number) {
    return this.http.delete(this._bucketlistUrl + b_id + '/' + 'items/' + i_id + '/', { headers: this.addHeaders() }
    )
      .map(res => res.json());
  }
  addHeaders() {
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', `JWT ${token}`);

    return headers;
  }
}
