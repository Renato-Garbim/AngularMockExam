import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/Guard/auth-guard';
import { GeneralGuard } from './Auth/Guard/general-guard';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroiviewComponent } from './heroiview/heroiview.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'heroes',
    component: HeroiviewComponent,
    canActivate: [GeneralGuard],
    canLoad: [GeneralGuard]
  },

  {
    path: 'create',
    component: HeroCreateComponent,
    canActivate: [GeneralGuard],
    canLoad: [GeneralGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
