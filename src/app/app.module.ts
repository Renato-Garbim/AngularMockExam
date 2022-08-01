import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroiviewComponent } from './heroiview/heroiview.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Auth/auth.module';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeroiviewComponent,
    HeroCreateComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

    

  } 




}
