import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralGuard } from './Auth/Guard/general-guard';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { HeroCreateComponent } from './Views/hero-create/hero-create.component';
import { HeroEditComponent } from './Views/hero-edit/hero-edit.component';
import { HeroiviewComponent } from './Views/heroiview/heroiview.component';
import { LoginComponent } from './Views/login/login.component';
import { RegistroComponent } from './Views/registro/registro.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent    
  },

  {
    path: 'registro',
    component: RegistroComponent    
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GeneralGuard],
    canLoad: [GeneralGuard]
  },

  {
    path: 'heroes',
    component: HeroiviewComponent,
    canActivate: [GeneralGuard],
    canLoad: [GeneralGuard]
  },

  {
    path: 'hero/:id',
    component: HeroEditComponent,
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
