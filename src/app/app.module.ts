import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
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
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { StoreModule } from '@ngrx/store';
import { DashboardHeroViewComponent } from './dashboard-hero-view/dashboard-hero-view.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HeroApiEffects } from './states/herostates/hero-api.effects';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeroiviewComponent,
    HeroCreateComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    HeroEditComponent,
    DashboardHeroViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    RouterModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([HeroApiEffects])    
    //StoreDevtoolsModule.instrument({maxAge: 5})
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
