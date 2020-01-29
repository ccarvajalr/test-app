import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [

  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'users', component:UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
