import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { LandingComponent } from './landing/landing.component';

import { BucketlistsModule } from './bucketlists/bucketlists.module';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './accounts/auth.service';
import {routes} from './bucketlists/bucketlist.routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      ...routes,
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'welcome', component: LandingComponent },
    ]),
    BucketlistsModule,
  ],
  providers: [AUTH_PROVIDERS, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
