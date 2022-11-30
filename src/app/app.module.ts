import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MessagesComponent } from './Views/messages/messages.component';
import { HeroiviewComponent } from './Views/heroiview/heroiview.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Auth/auth.module';
import { HeroCreateComponent } from './Views/hero-create/hero-create.component';
import { LoginComponent } from './Views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './Views/registro/registro.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { HeroEditComponent } from './Views/hero-edit/hero-edit.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HeroApiEffects } from './states/herostates/hero-api.effects';
import { SharedStateHeroesModule } from './states/herostates/hero.state';

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
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    RouterModule,
    SharedStateHeroesModule,    
    StoreModule.forRoot({  }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([HeroApiEffects])    
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
