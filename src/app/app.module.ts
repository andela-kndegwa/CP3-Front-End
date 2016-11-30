import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { LandingComponent } from './landing/landing.component';

import {BucketlistsModule } from './bucketlists/bucketlists.module';

import { AUTH_PROVIDERS, JwtHelper } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'register', component:RegisterComponent},
      {path: 'login', component:LoginComponent},
      {path: 'welcome', component:LandingComponent},
      ]),
    BucketlistsModule,
  ],
  providers: [AUTH_PROVIDERS, JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
