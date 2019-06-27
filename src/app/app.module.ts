import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { FormularioAngularMaterialComponent } from './formulario-angular-material/formulario-angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
        MatButtonModule, MatSidenavModule,
        MatIconModule, MatListModule,
        MatFormFieldModule, MatInputModule,
        MatSelectModule, MatOptionModule } from '@angular/material';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormularioEdicionComponent } from './formulario-edicion/formulario-edicion.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    FormularioAngularMaterialComponent,
    FormularioEdicionComponent,
    LoginComponent,
    PersonasComponent
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
    MatGridListModule
  ],
  providers: [LoggingService, PersonasService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
