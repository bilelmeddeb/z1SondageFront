import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { LawijComponent } from './lawij/lawij.component';
import {HttpModule} from '@angular/http';
import {UsersService} from '../services/Users.service';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersComponent},
  {path:'lawij',component:LawijComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    LawijComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
