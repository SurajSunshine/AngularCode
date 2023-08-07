import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
const routes: Routes = [

  {path :'login',component:LoginComponent},
  {path :'forgot-password',component:ForgotPasswordComponent},
  {path :'',redirectTo:'/login', pathMatch:'full'},
  {
    path: 'admin',
    canActivate:[AuthGuard],
    loadChildren: () =>
   import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
  },
  //{ path: '**', redirectTo: '/login', pathMatch: 'full' }, // Wildcard route to redirect to login
 {path :'**',component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
