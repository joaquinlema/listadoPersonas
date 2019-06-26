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
<<<<<<< HEAD
import { MatGridListModule } from '@angular/material/grid-list';
=======
>>>>>>> 640188f062269582063479223714d841a0c7db50

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    FormularioAngularMaterialComponent,
    FormularioEdicionComponent
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
<<<<<<< HEAD
    HttpClientModule,
    MatGridListModule
=======
    HttpClientModule
>>>>>>> 640188f062269582063479223714d841a0c7db50
  ],
  providers: [LoggingService, PersonasService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
