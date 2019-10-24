import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

const restrictedRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
        children: [
            { path: 'cliente', component: ClienteListComponent },
            { path: 'cliente/form', component: ClienteFormComponent },
            { path: '**', redirectTo: 'cliente' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(restrictedRoutes)
    ],
    exports: [RouterModule]
})
export class RestrictedRoutingModule { }