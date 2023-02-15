import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { NavComponent } from './nav/nav.component';
import { FotterComponent } from './fotter/fotter.component';
import { LoginComponent } from './login/login.component';
import { NewusuComponent } from './newusu/newusu.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    NavComponent,
    FotterComponent,
    LoginComponent,
    NewusuComponent,
    Error404Component,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
