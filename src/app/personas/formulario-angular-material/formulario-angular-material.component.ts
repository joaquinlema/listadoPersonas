import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { Persona } from '../../persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-angular-material',
  templateUrl: './formulario-angular-material.component.html',
  styleUrls: ['./formulario-angular-material.component.css']
})
export class FormularioAngularMaterialComponent implements OnInit {

  _sexoSelect: string;

  constructor(private _loggingService: LoggingService,
    private _personaService: PersonasService,
    private router: Router) {
      /*this._personaService._saludar.subscribe(
        (indice: number) => this._loggingService.enviarMensajeConsola('Indice', 'El indice es: ' + indice, 'Ok')
      );*/
    }

ngOnInit() {
}

onAgregarPersona(nombreInput: HTMLInputElement , apellidoInput: HTMLInputElement) {
     if (this.onValidarPersona(nombreInput.value, apellidoInput.value)) {
      const personaNueva = new Persona(nombreInput.value, apellidoInput.value);
      // le pasamos los datos al componenete padre y que dato le pasamos
      // this.personaCreada.emit(personaNueva);
      this._personaService.onAgregarPersona(personaNueva);
      this._loggingService.enviarMensajeConsola('Persona Agregada', personaNueva._nombre + ' ' + personaNueva._apellido + ' \n', 'volver');
      // this._personas.push(personaNueva);
      nombreInput.value = '';
      apellidoInput.value = '';
      // this._nombreInput = '';
      // this._apellidoInput = '';
      this.onCancelar();
    } else {
      this._loggingService.enviarMensajeConsola('Error', 'Debe completar todos los campos', 'Volver');
  }
}

onValidarPersona(nombre: string, apellido: string) {
  return (nombre && apellido);
}

onCancelar() {
  this.router.navigate(['personas']);
}

}
