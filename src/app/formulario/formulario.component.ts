import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import Swal from 'sweetalert2';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // utilizada para pasarle datos al comnponenete padre
  // @Output() personaCreada = new EventEmitter<Persona>();
  // _nombreInput: string;
  // _apellidoInput: string;

  constructor(private _loggingService: LoggingService,
              private _personaService: PersonasService) {
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
      // this.loggingService.enviarMensajeConsola(personaNueva.nombre + ' ' + personaNueva.apellido);
      // this._personas.push(personaNueva);
      nombreInput.value = '';
      apellidoInput.value = '';
      // this._nombreInput = '';
      // this._apellidoInput = '';
    } else {
      this._loggingService.enviarMensajeConsola('Error', 'Debe completar todos los campos', 'Volver');
    }
  }

  onValidarPersona(nombre: string, apellido: string) {
    return (nombre && apellido);
  }
}
