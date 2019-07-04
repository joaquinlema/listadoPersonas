import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { FormularioAngularMaterialComponent } from './personas/formulario-angular-material/formulario-angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
        MatButtonModule, MatSidenavModule,
        MatIconModule, MatListModule,
        MatFormFieldModule, MatInputModule,
        MatSelectModule, MatOptionModule } from '@angular/material';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormularioEdicionComponent } from './personas/formulario-edicion/formulario-edicion.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    FormularioAngularMaterialComponent,
    FormularioEdicionComponent,
    LoginComponent,
    PersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [LoggingService, PersonasService, DataService, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
