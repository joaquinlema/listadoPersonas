import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: string;
  @Output() editar = new EventEmitter();

  constructor(private personaService: PersonasService) { }

  ngOnInit() {
  }

  onEditar() {
    this.editar.emit({indice: this.indice, persona : this.persona});
  }

}
