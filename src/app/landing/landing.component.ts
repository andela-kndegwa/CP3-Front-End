import { Component, OnInit } from '@angular/core';
import {AuthService } from '../accounts/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private auth: AuthService, private route : Router) { }

  ngOnInit() {
  }

}
