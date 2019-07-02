import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonasService } from '../../personas.service';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-formulario-edicion',
  templateUrl: './formulario-edicion.component.html',
  styleUrls: ['./formulario-edicion.component.css']
})
export class FormularioEdicionComponent {
    @Input() persona: Persona;
    @Input() indice: number;
    @Output() cerraEdicion = new EventEmitter();

  constructor(private personaService: PersonasService) {  }

    onCambiar() {
      const personaNueva = this.persona;
      this.personaService.onModificarPersona(this.indice, personaNueva);
      this.cerraEdicion.emit(false);
    }

    onCancelar() {
      this.cerraEdicion.emit(false);
    }
}
