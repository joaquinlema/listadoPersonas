import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioAngularMaterialComponent } from './personas/formulario-angular-material/formulario-angular-material.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path : '', component: PersonasComponent},
  {path : 'personas', component: PersonasComponent, children : [
    {path : 'agregar', component: FormularioAngularMaterialComponent},
    {path : ':id', component: FormularioAngularMaterialComponent},
  ]},
  {path: 'login', component: LoginComponent},
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
