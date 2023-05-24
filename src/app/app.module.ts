import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { RisqueComponent } from './risque/risque.component';
import { RisqueListComponent } from './risque-list/risque-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandingComponent,
    UserComponent,
    UsertypeComponent,
    RisqueComponent,
    RisqueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path : '' , component : LandingComponent},
      {path : 'admin' ,component : AdminComponent},
      {path : 'landing' ,component : LandingComponent},
      {path : 'user' ,component : UserComponent},
      {path : 'usertype' ,component : UsertypeComponent},
      {path : 'risque' ,component : RisqueComponent},
      {path : 'risquelist' ,component : RisqueListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
