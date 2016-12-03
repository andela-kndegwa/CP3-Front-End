import {Injectable, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DisplayServiceToggle {

// This service allows us to toggle the showregister flag.
  public static showregister: boolean=true;

  setregister() {
      DisplayServiceToggle.showregister = false;
  }
  getregister(){
      return DisplayServiceToggle.showregister;

  }
}