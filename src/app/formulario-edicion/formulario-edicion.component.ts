import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario-edicion',
  templateUrl: './formulario-edicion.component.html',
  styleUrls: ['./formulario-edicion.component.css']
})
export class FormularioEdicionComponent {
    @Input() persona: Persona;
    @Input() indice: number;
<<<<<<< HEAD
=======
    nombre: string;
    apellido: string;
>>>>>>> 640188f062269582063479223714d841a0c7db50
    @Output() cerraEdicion = new EventEmitter();

  constructor(private personaService: PersonasService) {  }

    onCambiar() {
<<<<<<< HEAD
      const personaNueva = this.persona;
      this.personaService.onModificarPersona(this.indice, personaNueva);
=======
      this.personaService.onModificarPersona(this.indice, new Persona(this.nombre, this.apellido));
>>>>>>> 640188f062269582063479223714d841a0c7db50
      this.cerraEdicion.emit(false);
    }

    onCancelar() {
      this.cerraEdicion.emit(false);
    }
}
