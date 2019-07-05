import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioAngularMaterialComponent } from './personas/formulario-angular-material/formulario-angular-material.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuardian } from './login/login-guardian.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path : '', canActivate: [LoginGuardian], component: PersonasComponent},
  {path : 'personas', component: PersonasComponent, canActivate: [LoginGuardian] , children : [
    {path : 'agregar', component: FormularioAngularMaterialComponent},
    {path : ':id', component: FormularioAngularMaterialComponent},
  ]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
