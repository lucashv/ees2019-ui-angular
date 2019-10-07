import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { animation: 'logout' } },
  {
    path: 'restricted',
    canLoad: [AuthGuard],
    loadChildren: () => import('./restricted/restricted.module').then(mod => mod.RestrictedModule),
    data: { animation: 'login'}
  },
  { path: '', pathMatch: 'full', redirectTo: '/restricted/cliente' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
