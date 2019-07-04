import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioAngularMaterialComponent } from './personas/formulario-angular-material/formulario-angular-material.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', component: PersonasComponent},
  {path : 'personas', component: PersonasComponent, children : [
    {path : 'personas/agregar', component: FormularioAngularMaterialComponent},
    {path : 'personas/:id', component: FormularioAngularMaterialComponent},
  ]},
  {path: 'login', component: LoginComponent}
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
